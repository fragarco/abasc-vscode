import * as vscode from 'vscode';
import { BasicInfo } from './basicinfo';

export function activate(context: vscode.ExtensionContext) {

    const completionProvider = vscode.languages.registerCompletionItemProvider(
        { 
            language: 'abascbasic',
            scheme: 'file'
        },
        {
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                return BasicInfo;
            }
        },
        '.' // list of characters that trigger the autocompletion
    );
    context.subscriptions.push(completionProvider);

    const hoverProvider = vscode.languages.registerHoverProvider(
        { 
            language: 'abascbasic',
            scheme: 'file'
        },
        {
            provideHover(document, position, token) {
                const range = document.getWordRangeAtPosition(position);
                const word = document.getText(range).toUpperCase();
                const basicDocs: Record<string, string> = {}

                for (const item of BasicInfo) {
                    if (item.label != undefined) {
                        basicDocs[item.label as string] = item.documentation as string;
                    }
                }
                if (basicDocs[word]) {
                    return new vscode.Hover(new vscode.MarkdownString(basicDocs[word]));
                }
                return null;
            }
        }
    );
    context.subscriptions.push(hoverProvider);
}

export function deactivate() {}