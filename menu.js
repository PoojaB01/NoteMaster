module.exports = function(mainWindow) {

    const template = [{
            label: 'Account',
            submenu: [{
                    label: "Create New Account",
                    click() {}
                },
                {
                    label: "Login",
                    click() {}
                },
                {
                    label: "Update Password",
                    click() {}
                },
            ]
        },
        {
            label: 'Notebook',
            submenu: [{
                    label: "Create Note",
                    click() { mainWindow.webContents.send('new-file'); }
                },
                {
                    label: 'Open Note',
                    click() { mainWindow.webContents.send('open-file'); }
                },
                {
                    label: "Delete Note",
                    click() {}
                },
                {
                    label: "Create Notebook",
                    click() { mainWindow.webContents.send('new-folder'); }
                },
                {
                    label: 'Open Notebook',
                    click() { mainWindow.webContents.send('open-folder'); }
                },
                {
                    label: "Delete Notebook",
                    click() {}
                },
                {
                    type: 'separator'
                },
                {
                    role: 'close'
                },
            ]
        },
        {
            label: 'Edit',
            submenu: [{
                    label: "Add Text",
                    click() {}
                },
                {
                    label: "Draw Content",
                    submenu: [{
                            label: "Draw Shape",
                            click() {}
                        },
                        {
                            label: "Freehand",
                            click() {}
                        },
                    ]
                },
                {
                    label: "Insert Image",
                    click() {}
                },
                {
                    label: "Manage Table",
                    submenu: [{
                            label: "Create Table",
                            click() {}
                        },
                        {
                            label: "Insert Row",
                            click() {}
                        },
                        {
                            label: "Insert Column",
                            click() {}
                        },
                    ]
                },
                {
                    label: "Delete Content",
                    click() {}
                },
                {
                    type: 'separator'
                },
                {
                    role: 'undo'
                },
                {
                    role: 'redo'
                },
                {
                    type: 'separator'
                },
                {
                    role: 'cut'
                },
                {
                    role: 'copy'
                },
                {
                    role: 'paste'
                }
            ]
        },
        {
            label: 'Search',
            submenu: [{
                label: "Text in Note",
                click() {}
            }, ]
        },
        // {
        //    label: 'View',
        //    submenu: [
        //       {
        //          label: 'Clear Recents',
        //          click() { mainWindow.webContents.send('clear-recents', 'Hello World!'); }
        //       },
        //       {
        //          role: 'reload'
        //       },
        //       {
        //          role: 'toggledevtools'
        //       },
        //       {
        //          type: 'separator'
        //       },
        //       {
        //          label: 'Toggle Recents',
        //          click() { mainWindow.webContents.send('toggle-recents', 'Hello World!'); }
        //       },
        //       {
        //          type: 'separator'
        //       },
        //       {
        //          role: 'togglefullscreen'
        //       }
        //    ]
        // },

        // {
        //    role: 'window',
        //    submenu: [
        //       {
        //          role: 'minimize'
        //       },
        //       {
        //          role: 'close'
        //       }
        //    ]
        // },

        // {
        //    role: 'help',
        //    submenu: [
        //       {
        //          label: 'Learn More',
        //          click() { require('electron').shell.openExternal('https://github.com/wyntonfranklin/electron-tutorial') }
        //       }
        //    ]
        // }
    ]

    return template;

}