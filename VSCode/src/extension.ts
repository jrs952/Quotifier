'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import Window = vscode.window;
import Range = vscode.Range;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "quotifier-code" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.Quotify', () => {
        // The code you place here will be executed every time your command is executed      
        if (!vscode.window.activeTextEditor) {
            vscode.window.showInformationMessage('Select Text First');
            return;
        }
        
        let editor = Window.activeTextEditor;
        if (editor !== undefined){        
            let doc = editor.document;
            let selection = editor.selections;

            editor.edit(function (edit){
                for(var x = 0; x < selection.length; x++){
                    let txt: string = doc.getText(new Range(selection[x].start, selection[x].end));
                    let searchString = txt.split("\r\n").join( "',\r\n'");                
                    searchString = "('" + searchString;
                    searchString = searchString + "')";
                    edit.replace(selection[x], searchString);                
                }            
            }).then(success => {
                if (success){
                    if (editor !== undefined){
                        let postion = editor.selection.end; 
                        editor.selection = new vscode.Selection(postion, postion);
                    }
                }
            });
        }
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}