import * as vscode from 'vscode';
import { BasicInfo } from './basicinfo';
import { BaseInfo } from './baseinfo';
import { CPCRSLIBInfo } from './cpcrslibinfo';
import { CPCTeleraInfo } from './cpctelerainfo';

export function activate(context: vscode.ExtensionContext) {

    const completionProvider = vscode.languages.registerCompletionItemProvider(
        { 
            language: 'abascbasic',
            scheme: 'file'
        },
        {
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                return [...BasicInfo, ...BaseInfo, ...CPCTeleraInfo, ...CPCRSLIBInfo];
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
                const basicDocs: Record<string, vscode.MarkdownString[]> = {}

                for (const item of BasicInfo) {
                    if (item.label != undefined) {
                        basicDocs[item.label as string] = [
                            new vscode.MarkdownString("```" + item.signature + "```"),
                            item.documentation as vscode.MarkdownString,
                        ];
                    }
                }
                if (basicDocs[word]) {
                    return new vscode.Hover(basicDocs[word]);
                }
                return null;
            }
        }
    );
    context.subscriptions.push(hoverProvider);
}

export function deactivate() {}