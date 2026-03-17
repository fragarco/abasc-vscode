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
                let label = ""
                const info = [...BasicInfo, ...CPCTeleraInfo, ...CPCRSLIBInfo];
                for (const item of info) {
                    if (item.label != undefined) {
                        label = item.label as string
                        label = label.toUpperCase().replace('$', '')
                        basicDocs[label] = [
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