import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "search-blog-extension" is now active in the web extension host!');

	let disposable = vscode.commands.registerCommand('search-blog-extension.searchWdsBlogExample', () => {
		vscode.window.showInformationMessage('Hello World from Search Blog Extension in a web extension host!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
