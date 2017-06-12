import qreact from 'preact-react-web';
import { expect } from 'chai';
import { browser, beforeHook, afterHook, loadScript, config }  from 'karma-event-driver-ext/cjs/event-driver-hooks';
let { $serial } = browser;
let g = (id) => document.getElementById(id);
let react = global.qreact = qreact;
let host = '127.0.0.1';
config({
    host,
    port: 8848
});

async function __loadScript() {
    await loadScript("//" + host + ":8849/examples/flux/js/qunar-react-native.js");
}

describe('QunarReactNativeWeb', function() {
    // increase timeout
    this.timeout(200000);

    before(async() => {
        await beforeHook();
    });

    after(async() => {
        await afterHook();
    });

    it('Test ScrollView TextInput and Others All', async () => {
        await __loadScript();
        // render index
        let sceneQuery = '[pointerevents]';
        let textQuery = '.rn-text';
        let buttonQuery = '[accessibilityrole="button"]';
        let scrollerQuery = '.rn-scroller-vert';
        let CurrentScene, ScrollViewEle, backButton, scroller, allButtonsInIndex = [], buttonHeight = 18, buttonToClick;
        let testDOM = (step) => {
            expect(CurrentScene).not.equal(undefined);
            backButton = CurrentScene.querySelector(buttonQuery);
            scroller = CurrentScene.querySelector(scrollerQuery);
            ScrollViewEle = scroller && scroller.parentElement.parentElement;
            expect(backButton).not.equal(null);
        };
        EventEmitter.addListener('rn:event', async (obj) => {
            if (obj.type != 'PV') return;
            let presentedIndex = QunarReactWebExt.default.Router._vcs[0].nav.state.presentedIndex;
            CurrentScene = document.querySelectorAll(sceneQuery)[presentedIndex];
            if (presentedIndex === 0 && CurrentScene && allButtonsInIndex.length === 0) {
                let allButtons = CurrentScene.querySelectorAll([scrollerQuery, buttonQuery, textQuery].join(' '));
                [].forEach.call(allButtons, (ele, index) => {
                    let id = '#' + (ele.parentElement.id = ele.innerText);
                    allButtonsInIndex.push(id);
                    if (index === 0) buttonHeight = ele.parentElement.offsetHeight / 2;
                    if (index > 1) return;
                    // visit all page
                    $serial(
                        async () => {
                            testDOM('index');
                            buttonToClick = id;
                            indexScroll(buttonToClick);
                            // jump to:
                            await browser
                                .pause(300)
                                .click(buttonToClick)
                                .$apply('wait');
                        },
                        async () => {
                            testDOM(buttonToClick);
                            // back index
                            await browser
                                .click(backButton)
                                .$apply('wait');
                        }
                    );
                });
            }
            browser.$next();
        });

        let indexScroll = (to) => {
            let _component = ScrollViewEle._component._component,
                sceneHeight = ScrollViewEle.offsetHeight,
                max = to ? Math.min(scroller.offsetHeight - sceneHeight, g(to.replace(/^#/g, '')).offsetTop) : 0; // no IE
            expect(_component).not.equal(undefined);
            _component.scrollTo({y: max});
        };

        let scrollToEnd = () => {
            if (!scroller) return;
            // from top to bottom
            return browser
                .moveToObject(document.body, 0, 0)
                .moveTo(null, 0, scroller.getBoundingClientRect().top + 10)
                .buttonDown()
                .moveTo(null, 0, -buttonHeight)
                .moveTo(null, 0, -buttonHeight)
                .buttonUp();
        };
        let scrollToStart = () => {
            // from bottom to top
            return browser
                .moveToObject(document.body, 0, document.body.offsetHeight - ScrollViewEle.offsetHeight / 2)
                .buttonDown()
                .moveTo(null, 0, buttonHeight)
                .moveTo(null, 0, buttonHeight)
                .buttonUp();
        };

        // render index
        await loadScript("//" + host + ":8849/examples/flux/js/DemoApp.js");
        return $serial(
            async () => {
                // test index
                testDOM('index');
                indexScroll(0);
                // test ScrollView
                scrollToEnd()
                    .pause(500);
                await scrollToStart()
                    .$apply();
                // jump to:
                buttonToClick = '#TextInput';
                indexScroll(buttonToClick);
                await browser
                    .click(buttonToClick)
                    .$apply('wait');
            },
            async () => {
                testDOM(buttonToClick);
                let input = CurrentScene.querySelector('input[type=text]');
                let inputWithMaxLength = CurrentScene.querySelector('[maxlength="20"]');
                let inputValues = '123abc你好';
                expect(input).not.equal(null);
                expect(inputWithMaxLength).not.equal(null);
                let autoFocus = input._component.props.autoFocus;
                if (!autoFocus) input.focus();
                await browser.pause(200)
                    .keys(inputValues + '\uE004')
                    .keys('    \uE004')
                    .$apply();
                expect(input.value).to.equal(inputValues);
                expect(inputWithMaxLength.value).to.equal('____');
                // back index
                await scrollToEnd()
                    .pause(200)
                    .click(backButton)
                    .$apply('wait');
            }
        );
    });
});
