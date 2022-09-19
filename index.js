const { getModule } = require('powercord/webpack');
const { Plugin } = require('powercord/entities');

module.exports = class AmoledReload extends Plugin {
    startPlugin() {
        this.toggle(0);

        setTimeout(() => {
            this.toggle(1);
        }, 3000)

    }
    pluginWillUnload() {
      // Unloading Here
    }

    toggle(status) {
        window.webpackChunkdiscord_app.push([
            [Math.random()], {},
            function({
                c: e
            }) {
                for (let c in e) {
                    let exps = e[c]?.exports;
                    if (exps && typeof exps.overrideBucket === "function" && exps.ExperimentStore) {
                        for (var i = 0; i < 2; i += 1) {
                            setTimeout(() => {
                                exps.overrideBucket("2022-08_amoled_mode_web", status);
                            }, 100);
                        }
                    }
                }
            }
        ]);
    }
  }

