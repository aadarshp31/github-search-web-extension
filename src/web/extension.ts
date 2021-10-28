import axios from 'axios';
import * as vscode from 'vscode';
import User from './entities/User';


export async function activate(context: vscode.ExtensionContext) {
	let disposable = [];

	// Utils
	const getGithubUserByUsername = async (username: string = ""): Promise<any> => {

		if(username === ""){
			throw new Error("Please enter a valid github username to continue");
		}

		const res = await axios.get(`https://api.github.com/users/${username}`);
		return res.data;
	} 
	
	const getTopGithubUsers = vscode.commands.registerCommand('search-github-users-extension.getTopGithubUsers', async () => {

		
		// Load top github users by id
		const res = await axios.get("https://api.github.com/users");

		const users: any[] = res.data.map((user: User) => ({
			label: user.login,
			detail: user.html_url,
			link: user.html_url
		}))

		const selectedUser: any = await vscode.window.showQuickPick(users, {placeHolder: "Select any user to open in browser"});
		vscode.env.openExternal(selectedUser?.link);
	});

	const searchGithubUser = vscode.commands.registerCommand('search-github-users-extension.searchGithubUser', async () => {
		try {
			const userEnteredUsername = await vscode.window.showInputBox({placeHolder: "Enter a github username to search", ignoreFocusOut: true, title: "Github Username", value: ""});
			const user = await getGithubUserByUsername(userEnteredUsername);
	
			const userList: any[] = [{
				label: user.name || user.login,
				detail: user.bio || user.html_url,
				link: user.html_url
			}];		
	
			const selectedUser = await vscode.window.showQuickPick(userList, {placeHolder: "Select any user to open in browser"});
			vscode.env.openExternal(selectedUser?.link);
		} catch (error: any) {
			vscode.window.showErrorMessage(error.message);
		}
	})

	disposable.push(getTopGithubUsers, searchGithubUser);

	context.subscriptions.push(...disposable);
}

export function deactivate() {}
