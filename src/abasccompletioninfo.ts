import * as vscode from 'vscode';

export interface AbascCompletionInfo extends vscode.CompletionItem {
    signature: string;
}
