// TurboWarp 扩展：Simple JS Executor
// ID: simpleJsExecutor
// 极简版，仅用于测试基本功能
(function (Scratch) {
    'use strict';

    class SimpleJsExecutor {
        getInfo() {
            return {
                id: 'simpleJsExecutor',
                name: 'Simple JS',
                color1: '#ff8000',
                blocks: [
                    {
                        opcode: 'runCode',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'run [CODE]',
                        arguments: {
                            CODE: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'alert("Hi!")'
                            }
                        }
                    },
                    {
                        opcode: 'runCodeWithReturn',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'run [CODE] and return',
                        arguments: {
                            CODE: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '2 + 2'
                            }
                        }
                    }
                ]
            };
        }

        runCode(args) {
            try {
                // 直接执行用户输入的代码
                new Function(args.CODE)();
            } catch (error) {
                console.error('Run Error:', error.message);
                alert(`执行出错: ${error.message}`);
            }
        }

        runCodeWithReturn(args) {
            try {
                // 执行代码并返回结果
                const result = new Function(`return ${args.CODE}`)();
                return result;
            } catch (error) {
                console.error('Run Error:', error.message);
                return `出错: ${error.message}`;
            }
        }
    }

    // 注册扩展
    Scratch.extensions.register(new SimpleJsExecutor());
})(Scratch);