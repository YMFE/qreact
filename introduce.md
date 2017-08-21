
世界上也有很多类似的方案,如react-like, deku, virtual-dom, preact, inferno, mithriljs, yys如何突出自己的价值呢？我们认为
react是目前最有价值的前端解决方案，它拥有完整的工具链及仅次于jQuery的用户群，任何于它进行差异化竞争是不明智的行为，只能为它锦上添花。
yys没有对react进行增删（对IE8的不兼容也是react2015后的决定），只是在其外壳内部进行重新打造，力求百分之一百兼容react ,
可以用它替换公司已有的react项目而不用改一行代码。上面许多连你化方案都或多或少地react一些接口进行阉割，事实上我们无法预期业务线同学如何
使用React，太监版的react方案就像一个定时炸弹，非完整无以安心，非精致无以动心！

react是异常优秀，但也不是没有缺点，比如前期对webpack,babel的学习成本，体积过大等等。对此，我们团队提供了**ykit**简化项目的构建，
体积过大的问题则由**yys**解决。

包大小：

| framework  | version    | minimized size |
|------------|------------|----------------|
| React      | 0.14.3     | 136.0kb        |
| React-lite | 0.15.6     | 25kb           |
| Preact     | 5.6.0      | 10kb           |
| Deku       | 2.0.0-rc16 | 51.2kb         |
| Virtual    | Dom	2.1.1 | 50.5kb         |
| yys        | 1.0        | 29kb           |




yys 29kb中，其中有12kb是事件系统占去的，日后会继续对这部分进行优化。目前yys已经能成功运行todomvc,redux， router等例子。




