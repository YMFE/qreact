import qreact from 'preact-react-web';
import { expect } from 'chai';
import eventHook from '../../event-driver-hooks';
let { runCommand, beforeHook, afterHook, loadScript } = eventHook;
let react = global.qreact  = qreact;
let g = (id) => document.getElementById(id);

async function __loadScript() {
    await loadScript("//common.qunarzz.com/buri/prd/scripts/api/index.js?_t=" + new Date().getTime());
    await loadScript("//127.0.0.1:8099/examples/flux/js/qunar-react-native.js");
}

describe('Test QRN Web', function() {
    // increase timeout
    this.timeout(10000);

    before(async () => {
        await beforeHook();
    });
    
    after(async ()=>{
        await afterHook(false);
    });

    it('Test Index', async () => {
        await  __loadScript();
        let { AppRegistry, Component, View, Text, ScrollView, TextInput, TouchableOpacity } = QunarReactWeb;

        let prefix = '__';
        let sceneQuery = '[pointerevents]';
        let textQuery = '.rn-text';
        let scrollerQuery = '.rn-scroller-vert';
        let currentScene = 0, backButton;

        let scroller, back, input, resolve, reject, prom = Promise.resolve(), button;

        let wrapPromise = () => prom = prom.then(() => new Promise((rs, rj) => {
            resolve = rs;
            reject = rj;
        }));
        // render index
        wrapPromise();
        // build query system
        EventEmitter.addListener('rn:event', (obj) => {
            if (obj.type != 'PV') return;
            setTimeout(() => {
                document.querySelectorAll(sceneQuery).forEach((ele, index) => {
                    let sid = ele.id = prefix + 'S' + index;
                    currentScene = index;
                    // get back button
                    sid = '#' +  sid;
                    back = document.querySelector(sid + ' ' + textQuery).parentNode;
                    back.id = prefix + 'B' + index;
                    // get first scroller
                    scroller = document.querySelector(sid + ' ' + scrollerQuery);
                    if (scroller) {
                        scroller.id = prefix + 'SC' + index;
                    }
                    // get first input
                    input = document.querySelector(sid + ' input[type=text]');
                    if (input) {
                        input.id = prefix + 'I' + index;
                    }
                    button = document.getElementById('__S0').getElementsByClassName('rn-text')[11];
                    button.id = prefix + 'BT' + index;
                });
                if (resolve) {
                    resolve();
                } else {
                    prom = prom || Promise.resolve();
                }
                resolve = reject = null;
                console.log(scroller);
            });
        });
        await loadScript("//127.0.0.1:8099/examples/flux/js/DemoApp.js");
        await prom;

        // enter child
        // wrapPromise();
        let flag = false;
        await runCommand((browser) => {
            // since pan
            browser.moveToObject(button).buttonDown().moveTo(null, 0, -5).moveTo(null, 0, -5).buttonUp();
        });
        await prom;

        // back index
        wrapPromise();
        await runCommand((browser) => {
            browser.click(back);
        });
        await prom;
        expect(document.querySelectorAll(sceneQuery).length).to.equal(1);
        expect(scroller.id).to.equal(prefix + 'SC0');

        // enter other child
        wrapPromise();
        await runCommand((browser) => {
            browser.moveToObject(back, 0, 0);
            browser.moveTo(null, 40, 220);
            browser.buttonDown(0);
            browser.buttonUp(0);
        });
        await prom;
    });
});
