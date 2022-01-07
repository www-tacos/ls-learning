import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  console.log('Congratulations, your extension "ls-learning" is now active!');

  let disposable = vscode.commands.registerCommand('ls-learning.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World from ls-learning!');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() { }
