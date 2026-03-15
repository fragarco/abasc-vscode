import * as vscode from 'vscode';
import { AbascCompletionInfo } from './abasccompletioninfo';

export const BasicInfo: AbascCompletionInfo[] = [
    {
        label: "AFTER",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "AFTER <int expr>[,<int expr>] GOSUB (LINE|IDENT)",
        documentation: new vscode.MarkdownString(
            "Invoke a subroutine after a given time period has elapsed. " +
            "**delay** indicates the period of the delay, in units of 1/50 seconds, " +
            "and optional **timer** (in range 0 to 3), indicates which of the " +
            "four available delay timers should be used."),
        insertText: new vscode.SnippetString('AFTER ${1:delay},${2:timer} GOSUB ${3:label}')
    },
    {
        label: "ASM",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "ASM <string>[,<string>]*",
        documentation: new vscode.MarkdownString(
            "Inserts the assembly code contained in **string**."),
        insertText: new vscode.SnippetString('ASM "${1:code}"')
    },
    {
        label: "AUTO",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "AUTO [<line number>l[,<increment>]",
        documentation: new vscode.MarkdownString(
            "Generate line numbers automatically. This command "+
            "is ignored by ABASC compiler."),
        insertText: new vscode.SnippetString('AUTO')
    },
    {
        label: "BORDER",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "BORDER <colour>[,<colour>]",
        documentation: new vscode.MarkdownString(
            "To change the colour of the border on the screen. If two colours are "+
            "specified, the border alternates between the two at the rate determined "+
            "in the SPEED INK command, if given. The range of border colours is 0 to 26."),
        insertText: new vscode.SnippetString('BORDER ${1:colour}')
    },
    {
        label: "CALL",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "CALL <address expr>,[<list of: <parameter>] | <SUB ident>",
        documentation: new vscode.MarkdownString(
            "Allows an externally developed sub-routine to be invoked from BASIC. "+
            "The routine is called with IX pointing to the list of parameters and A "+
            "containing the number of parameters. Parameters are passed in reverse "+
            "order, ie. (IX+0) is the last parameter supplied."),
        insertText: new vscode.SnippetString('CALL ${1:address}')
    },
    {
        label: "CASE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "CASE <int expression>",
        documentation: new vscode.MarkdownString(
            "Specifies an option (must be a constant integer) inside a SELECT "+
            "CASE statement."),
        insertText: new vscode.SnippetString('CASE ${1:x}')
    },
    {
        label: "CASE DEFAULT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "CASE DEFAULT",
        documentation: new vscode.MarkdownString(
            "Specifies the default option for a SELECT CASE statement."),
        insertText: new vscode.SnippetString('CASE DEFAULT')
    },
    {
        label: "CAT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "CAT",
        documentation: new vscode.MarkdownString(
            "Causes BASIC to start reading the directory of the current drive "+
            "(cassette or disc) and to display the names of all files found. "),
        insertText: new vscode.SnippetString('CAT')
    },
    {
        label: "CHAIN MERGE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "CHAIN MERGE <file name>[,<line number>][, DELETE <range>]",
        documentation: new vscode.MarkdownString(
            "Appends the specified **file** code with the current program "+
            "code. In ABASC, it has the same utility than IMPORT or INCLUDE in other "+
            "languages or BASIC flavours."),
        insertText: new vscode.SnippetString('CHAIN MERGE "${1:file}"')
    },
    {
        label: "CHAIN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "CHAIN <file name>[,<line number>]",
        documentation: new vscode.MarkdownString(
            "CHAIN loads a program from disc or cassette into the memory; "+
            "replacing the existing program. ABASC ignores this command."),
        insertText: new vscode.SnippetString('CHAIN "${1:file}"')
    },
    {
        label: "CLEAR",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "CLEAR",
        documentation: new vscode.MarkdownString(
            "Clears all variables to zero or null. All open files are abandoned, all "+
            "arrays and user functions are erased, and BASIC is set to radians mode "+
            "of calculation. "),
        insertText: new vscode.SnippetString('CLEAR')
    },
{
        label: "CLEAR INPUT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "CLEAR INPUT",
        documentation: new vscode.MarkdownString(
            "Discards all previously typed input from the keyboard, still in the "+
            "arrays and user functions are erased, and BASIC is set to radians mode "+
            "okeyboard buffer. "),
        insertText: new vscode.SnippetString('CLEAR INPUT')
    },
    {
        label: "CLG",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "CLG [<masked ink>]",
        documentation: new vscode.MarkdownString(
            "Clears the graphics screen to the graphics paper colour. If an **ink** "+
            "(optional) is specified, the graphics paper is set to that value."),
        insertText: new vscode.SnippetString('CLG')
    },
    {
        label: "CLOSEIN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "CLOSEIN",
        documentation: new vscode.MarkdownString("Close any input file from disc or cassette."),
        insertText: new vscode.SnippetString('CLOSEIN')
    },
    {
        label: "CLOSEOUT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "CLOSEOUT",
        documentation: new vscode.MarkdownString("Close any output file from disc or cassette."),
        insertText: new vscode.SnippetString('CLOSEOUT')
    },
    {
        label: "CLS",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "CLS [#<stream expression>]",
        documentation: new vscode.MarkdownString(
            "Clear the given screen stream (window) to its paper ink. If no "+
            "**stream** is given, screen stream #0 is cleared."),
        insertText: new vscode.SnippetString('CLS')
    },
    {
        label: "CONST",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "CONST IDENT = <int expression>",
        documentation: new vscode.MarkdownString(
            "Declares a named constant, assigning a constant integer **value**. "+
            "When the named constant is used in an expression, its name is substituted by its value, "+
            "which may enable compiler optimizations."),
        insertText: new vscode.SnippetString('CONST ${1:ident} = ${2:value}')
    },
    {
        label: "CONT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "CONT",
        documentation: new vscode.MarkdownString(
            "Continue program execution after a *Break*, STOP or END. "+
            "In ABASC, it stops the execution of the program until a key is pressed."),
        insertText: new vscode.SnippetString('CONT')
    },
    {
        label: "CURSOR",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "CURSOR [<system switch>][,<user switch>]",
        documentation: new vscode.MarkdownString(
            "Sets the **system** switch or the **user** switch to the cursor, ON or OFF. The "+
            "**system** and **user** switches must be either 0 (OFF) or 1 (ON)."),
        insertText: new vscode.SnippetString('CURSOR ${1:system}, ${2:user}')
    },  
    {
        label: "DATA",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "DATA <list of constant>",
        documentation: new vscode.MarkdownString("Declares constant data for use within a program."),
        insertText: new vscode.SnippetString('DATA ${1:values}')
    },
    {
        label: "DECLARE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "DECLARE list of: <string ident> [FIXED INT]",
        documentation: new vscode.MarkdownString(
            "Declares a variable before being used. This allows users to set a size "+
            "lower than 254 for string using the statement FIXED."),
        insertText: new vscode.SnippetString('DECLARE ${1:ident}')
    },
    {
        label: "DEF FN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "DEF FN <name> [(<formal parameters>)]=<general expression>",
        documentation: new vscode.MarkdownString(
            "Allows the program to define and use simple value returning functions."),
        insertText: new vscode.SnippetString('DEF FN${1:name}(${2:args}) = ${3:expression}')
    },
    {
        label: "DEFINT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "DEFINT <range(s) of letters>",
        documentation: new vscode.MarkdownString(
            "Define variables matching the **range** as integer. "+
            "In ABASC, this command is ignored."),
        insertText: new vscode.SnippetString('DEFINT ${1:range}')
    },
    {
        label: "DEFSTR",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "DEFSTR <range(s) of letters>",
        documentation: new vscode.MarkdownString("This command is ignored and has not effect in ABASC."),
        insertText: new vscode.SnippetString('DEFSTR ${1:range}')
    },
    {
        label: "DEFREAL",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "DEFREAL <range(s) of letters>",
        documentation: new vscode.MarkdownString(
            "This command is ignored by ABASC. Type is integer by default and must "+
            "be explicitly changed using '!' suffix in variable names for reals."),
        insertText: new vscode.SnippetString('DEFREAL ${1:range}')
    },
    {
        label: "DEG",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "DEG",
        documentation: new vscode.MarkdownString("Set degrees mode."),
        insertText: new vscode.SnippetString('DEG')
    },
    {
        label: "DELETE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "DELETE <numeric range>",
        documentation: new vscode.MarkdownString(
            "Originally, this command removed part of the current BASIC program. "+
            " ABASC reuses it to fill memory with 0s. Therefore, the range indicates "+
            "a memory block and not line numbers."),
        insertText: new vscode.SnippetString('DELETE ${1:range}')
    },
    {
        label: "DI",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "DI",
        documentation: new vscode.MarkdownString(
            "Disable interrupts until re-enabled explicitly by EI or "+
            "implicitly by the RETURN at the end of an interrupt GOSUB routine."),
        insertText: new vscode.SnippetString('DI')
    },
    {
        label: "DIM",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "DIM <list of: subscripted variable>",
        documentation: new vscode.MarkdownString(
            "Allocate space for arrays. Item count starts in 0 and goes up to the given subscript value."),
        insertText: new vscode.SnippetString('DIM ${1:variable}(${2:subscripts})')
    },
    {
        label: "DRAW",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "DRAW <x coord>,<y coord>[,<ink>][,<ink mode>]",
        documentation: new vscode.MarkdownString(
            "Draws a line on the screen from the current graphics cursor position to "+
            "an absolute position."),
        insertText: new vscode.SnippetString('DRAW ${1:x}, ${2:y}')
    },
    {
        label: "DRAWR",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "DRAWR <x offset>,<y offset>[,<ink>][,<ink mode>]",
        documentation: new vscode.MarkdownString(
            "Draws a line on the screen from the current graphics cursor position to "+
            "a relative position."),
        insertText: new vscode.SnippetString('DRAWR ${1:x}, ${2:y}')
    },
    {
        label: "EDIT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "EDIT <line number>",
        documentation: new vscode.MarkdownString("This command is ignored by ABASC."),
        insertText: new vscode.SnippetString('EDIT')
    },
    {
        label: "EI",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "EI",
        documentation: new vscode.MarkdownString("Enable interrupts disabled by a DI command."),
        insertText: new vscode.SnippetString('EI')
    },
    {
        label: "ELSE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "ELSE <list-of-statements>",
        documentation: new vscode.MarkdownString(""),
        insertText: new vscode.SnippetString('ELSE')
    },
    {
        label: "END",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "END",
        documentation: new vscode.MarkdownString("End of program. ABASC generates a infinity loop."),
        insertText: new vscode.SnippetString('END')
    },
    {
        label: "END IF",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "END IF",
        documentation: new vscode.MarkdownString("End of a multiline IF block."),
        insertText: new vscode.SnippetString('END IF')
    },
    {
        label: "END FUNCTION",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "END FUNCTION",
        documentation: new vscode.MarkdownString("Signals the end of a user defined FUNCTION."),
        insertText: new vscode.SnippetString('END FUNCTION')
    },
    {
        label: "END SUB",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "END SUB",
        documentation: new vscode.MarkdownString("Signals the end of a subroutine."),
        insertText: new vscode.SnippetString('END')
    },
    {
        label: "END SELECT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "END SELECT",
        documentation: new vscode.MarkdownString("End of a SELECT CASE block."),
        insertText: new vscode.SnippetString('END SELECT')
    },
    {
        label: "ENT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "ENT <envelope number>[,<envelope section>]*",
        documentation: new vscode.MarkdownString(
            "Sets the Tone ENvelope specified in the envelope **section** (in the "+
            "range 1 to 15), which is used in conjunction with the SOUND command. "+
            "If the **envelope** is negative (in the range -1 to -15), the envelope "+
            "repeats until the end of the duration of the SOUND command. "+
            "Each of the envelope **section**s may contain either 2 ou 3 parameters: "+
            "Parameter 1: **number of steps** (0 to 239). "+
            "Parameter 2: **step size** (-128 to +127). "+
            "Parameter 3: **pause time** "+
            "OR "+
            "Parameter 1: **tone period** (See parameter 2 of the SOUND command). "+
            "Parameter 2: **pause time**"),
        insertText: new vscode.SnippetString('ENT ${1:envelope}, ${2:sections}')
    },
    {
        label: "ENV",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "ENV <envelope number>[,<envelope section>]*",
        documentation: new vscode.MarkdownString(
            "Sets the volume envelope specified in the **envelope** number (in the range 1 to 15), "+
            "which is used in conjunction with the SOUND command. Each of the enveloppe **section**s "+
            "may contain either 2 or 3 parameters: "+
            "Parameter 1: **number of steps** (0 to 127). "+
            "Parameter 2: **step size** (-128 and +127). "+
            "Parameter 3: **pause time** (0 to 255). "+
            "OR "+
            "Parameter 1: **hardware envelope** the value to send to the envelope shape register. "+
            "Parameter 2: **envelope period** the value to send to the envelope period registers."),
        insertText: new vscode.SnippetString('ENV ${1:envelop}, ${2:sections}')
    },
    {
        label: "ERASE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "ERASE list of: <variable name>",
        documentation: new vscode.MarkdownString(
            "Originally, when an array was no longer required, could be ERASEd "+
            "and the memory used be reclaimed. However, this has no effect in ABASM."),
        insertText: new vscode.SnippetString('ERASE')
    },
    {
        label: "ERROR",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "ERROR <integer expression>",
        documentation: new vscode.MarkdownString("Sets the runtime variable that can be retrieve with ERR"),
        insertText: new vscode.SnippetString('ERROR ${1:x}')
    },
    {
        label: "EVERY",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "EVERY <int expr>[,<int expr>] GOSUB (LINE|IDENT)",
        documentation: new vscode.MarkdownString(
            "Allows a program to arrange for subroutines to be called at regular "+
            "**interval**s. Four delay **timer**s are available (0-3)."),
        insertText: new vscode.SnippetString('EVERY ${1:interval}, ${2:timer} GOSUB ${3:label}')
    },
    {
        label: "EXIT FOR",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "EXIT FOR",
        documentation: new vscode.MarkdownString("Interrupts a FOR ... NEXT loop."),
        insertText: new vscode.SnippetString('EXIT FOR')
    },
    {
        label: "EXIT WHILE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "EXIT WHILE",
        documentation: new vscode.MarkdownString("Interrupts a WHILE ... WEND loop."),
        insertText: new vscode.SnippetString('EXIT WHILE')
    },
    {
        label: "FILL",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "FILL <ink>",
        documentation: new vscode.MarkdownString(
            "Fills an area of the screen starting from the current graphics position "+
            "and extending until it reaches either the edge of the window or a pixel "+
            "set to the **ink** (CPC 664 and 6128 only)."),
        insertText: new vscode.SnippetString('FILL ${1:ink}')
    },
    {
        label: "FIXED",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "FIXED <int expression>",
        documentation: new vscode.MarkdownString("Sets a string maximum length to be **x** (1-254)."),
        insertText: new vscode.SnippetString('FIXED ${1:x}')
    },
    {
        label: "FRAME",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "FRAME",
        documentation: new vscode.MarkdownString("Waits until next frame flyback (VSYNC) signal is active."),
        insertText: new vscode.SnippetString('FRAME')
    },
    {
        label: "FOR",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "FOR <variable>=<int expr> TO <int expr> [STEP <int expr>]",
        documentation: new vscode.MarkdownString("Execute a body of program a given number of times."),
        insertText: new vscode.SnippetString('FOR ${1:var}=${2:start} TO ${3:end}')
    },
    {
        label: "FUNCTION",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "FUNCTION IDENT[(<formal parameters>)] [ASM]",
        documentation: new vscode.MarkdownString("Allow the program to define routines that returns simple values."),
        insertText: new vscode.SnippetString('FUNCTION ${1:name}(${2:args})')
    },
    {
        label: "GOSUB",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "GOSUB (LINE|IDENT)",
        documentation: new vscode.MarkdownString("Call a BASIC subroutine by branching to the specified **label**."),
        insertText: new vscode.SnippetString('GOSUB ${1:label}')
    },
    {
        label: "GOTO",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "GOTO (LINE|IDENT)",
        documentation: new vscode.MarkdownString("Branch to specified line number or label."),
        insertText: new vscode.SnippetString('GOTO ${1:label}')
    },
    {
        label: "GRAPHICS PAPER",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "GRAPHICS PAPER <ink>",
        documentation: new vscode.MarkdownString("Sets the **ink** of the graphics paper."),
        insertText: new vscode.SnippetString('GRAPHICS PAPER ${1:ink}')
    },
    {
        label: "GRAPHICS PEN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "GRAPHICS PEN [<ink>][,<background mode>]",
        documentation: new vscode.MarkdownString(
            "Set the **ink** (in the range 0 to 15) to be used for drawing lines and "+
            "plotting points."),
        insertText: new vscode.SnippetString('GRAPHICS PEN ${1:ink}')
    },
    {
        label: "IF",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "IF <logical expr> THEN <option part> [ELSE <option part>]",
        documentation: new vscode.MarkdownString("It is used to conditionally determine branch points."),
        insertText: new vscode.SnippetString('IF ${1:cond} THEN')
    },
    {
        label: "INK",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "INK <ink>,<colour>[,<colour>]",
        documentation: new vscode.MarkdownString(
            "Assigns colour(s) to a given **ink**. Ink values are "+
            "not sent to the hardware until the next FLYBACK (VSYNC) event."),
        insertText: new vscode.SnippetString('INK ${1:ink}, ${2:colour}')
    },
    {
        label: "INPUT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "INPUT [#<stream>][;][<quoted string>,]<list: [var]>",
        documentation: new vscode.MarkdownString("Reads data from the stated stream."),
        insertText: new vscode.SnippetString('INPUT "${1:prompt}", ${2:ident}')
    },
    {
        label: "KEY DEF",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "KEY DEF <key number>,<repeat>[,<normal>[,<shifted>[,<control>]]]",
        documentation: new vscode.MarkdownString(
            "This command has no effect in ABASC and its ignored by the compiler."),
        insertText: new vscode.SnippetString('KEY DEF ${1:key}, ${2:repeat}')
    },
    {
        label: "KEY",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "KEY <int expr>,<string expr>",
        documentation: new vscode.MarkdownString(
            "Fixes a new function key definition. ABASC ignores this command."),
        insertText: new vscode.SnippetString('KEY ${1:key}, ${2:func}')
    },
    {
        label: "LABEL",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "LABEL IDENT",
        documentation: new vscode.MarkdownString(
            "Defines a user label that can be used in GOSUB or GOTO calls."),
        insertText: new vscode.SnippetString('LABEL ${1:label}')
    },
    {
        label: "LET",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "LET IDENT = <expression>",
        documentation: new vscode.MarkdownString(
            "A remnant from early BASICS where variable assignments had to be seen coming."),
        insertText: new vscode.SnippetString('LET ${1:ident} = ${2:value}')
    },
    {
        label: "LINE INPUT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "LINE INPUT [<#stream expr>,][;][quoted str; ]<str variable>",
        documentation: new vscode.MarkdownString("Reads an entire line from the stream indicated."), 
        insertText: new vscode.SnippetString('LINE INPUT #${1:stream}, "${2:prompt}, ${3:ident}')
    },
    {
        label: "LIST",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "LIST [<line number range>][,#<stream expr>]",
        documentation: new vscode.MarkdownString(
            "List program lines to the given stream. This command is ignored by ABASC compiler."),
        insertText: new vscode.SnippetString('LIST')
    },
    {
        label: "LOAD",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "LOAD <file name>[,<address expression>]",
        documentation: new vscode.MarkdownString(
            "To read a **file** from disc or cassette into memory at the given **address**."),
        insertText: new vscode.SnippetString('LOAD "${1:file}", ${2:address}')
    },
    {
        label: "LOCATE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "LOCATE [#<stream expression>,]<x coord>,<y coord>",
        documentation: new vscode.MarkdownString(
            "Moves the text cursor at the stream indicated, to the position specified. "+
            "Co-ordinates start at 1. Stream 0 is the default stream.)"),
        insertText: new vscode.SnippetString('LOCATE ${1:x}, ${2:y}')
    },
    {
        label: "MASK",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "MASK [<int expr>l[,<first point setting>]",
        documentation: new vscode.MarkdownString(
            "Sets the mask or template to be used when drawing lines."),
        insertText: new vscode.SnippetString('MASK ${1:pattern}')
    },    
    {
        label: "MEMORY",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "MEMORY <address expression>",
        documentation: new vscode.MarkdownString(
            "MEMORY sets the limit for the compiled program so "+
            "it gives an error if the output binary exceedes that limit"),
        insertText: new vscode.SnippetString('MEMORY ${1:limit}')
    },
    {
        label: "MODE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "MODE <integer expression>",
        documentation: new vscode.MarkdownString(
            "Change the screen mode (0,1 or 2), and clear the screen to INK 0."),
        insertText: new vscode.SnippetString('MODE ${1:value}')
    },
    {
        label: "MOVE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "MOVE <x coord>,<y coord>[,<ink>][,<ink mode>]",
        documentation: new vscode.MarkdownString(
            "To move the graphics cursor to a position specified by **x** and **y**."),
        insertText: new vscode.SnippetString('MOVE ${1:x}, ${2:y}')
    },
    {
        label: "MOVER",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "MOVER <x coord>,<y coord>[,<ink>][,<ink mode>]",
        documentation: new vscode.MarkdownString(
            "To move the graphics cursor relative to a position specified by **x** and **y**."),
        insertText: new vscode.SnippetString('MOVER ${1:x}, ${2:y}')
    },
    {
        label: "NEW",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "NEW",
        documentation: new vscode.MarkdownString("ABASC issues a machine reset for this command."),
        insertText: new vscode.SnippetString('NEW')
    },
    {
        label: "NEXT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "NEXT [IDENT]",
        documentation: new vscode.MarkdownString("Marks the end of a FOR block."),
        insertText: new vscode.SnippetString('NEXT')
    },
    {
        label: "ON GOTO",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "ON <int expr> GOTO <list of:(LINE|IDENT)",
        documentation: new vscode.MarkdownString(
            "GOTO to the subroutine as directed by the result of the **value**. "+
        "If the result is 1, then the first label in the list is chosen, "+
        "if 2 then the second etc."),
        insertText: new vscode.SnippetString('ON ${1:value} GOTO ${2:labels}')
    },
    {
        label: "ON GOSUB",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "ON <int expr> GOSUB <list of:(LINE|IDENT)",
        documentation: new vscode.MarkdownString(
            "GOSUB to the subroutine as directed by the result of the **value**. "+
            "If the result is 1, then the first label in the list is chosen, "+
            "if 2 then the second etc."),
        insertText: new vscode.SnippetString('ON ${1:value} GOSUB ${2:labels}')
    },
    {
        label: "ON BREAK CONT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "ON BREAK CONT",
        documentation: new vscode.MarkdownString(
            "Disables the option to break a program pressing "+
            "the escape key twice. This is the default bahaviour of ABASC programs."),
        insertText: new vscode.SnippetString('ON BREAK CONT')
    },
    {
        label: "ON BREAK STOP",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "ON BREAK STOP",
        documentation: new vscode.MarkdownString(
            "Disables the trap created by ON BREAK GOSUB but "+
            "no other immediate effect. This is the default bahaviour of ABASC programs."),
        insertText: new vscode.SnippetString('ON BREAK STOP')
    },
    {
        label: "ON BREAK GOSUB",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "ON BREAK GOSUB (LINE|IDENT)",
        documentation: new vscode.MarkdownString(
            "Calls a subroutine on breaking from program execution by pressing [ESC] "+
            "twice. This command is ignored by ABASC and has no effect."),
        insertText: new vscode.SnippetString('ON BREAK GOSUB ${1:label}')
    },
    {
        label: "ON ERROR GOTO",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "ON ERROR GOTO (LINE|IDENT)",
        documentation: new vscode.MarkdownString("Go to **label** if ERR variable is not equal to 0"),
        insertText: new vscode.SnippetString('ON ERROR GOTO ${1:label}')
    },
    {
        label: "ON SQ",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "ON SQ (<channel>) GOSUB (LINE|IDENT)",
        documentation: new vscode.MarkdownString(
            "Enable an interrupt for when there is a free slot in the given sound queue. "+
            "The **channel** must be 1 for channel A, 2 for channel B or 4 for channel C."),
        insertText: new vscode.SnippetString('ON SQ(${1:channel}) GOTO ${2:label}')
    },
    {
        label: "OUT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "OUT <port number>,<int expr>",
        documentation: new vscode.MarkdownString(
            "Sends **value** (which must lie in the range 0 to 255) to "+
            "the specified **port** address."),
        insertText: new vscode.SnippetString('OUT ${1:value}, ${2:port}')
    },
    {
        label: "OPENIN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "OPENIN <filename>",
        documentation: new vscode.MarkdownString(
            "Open an input file from disc or cassette. The input file must be an ASCII file."),
        insertText: new vscode.SnippetString('OPENIN "${1:filename}"')
    },
    {
        label: "OPENOUT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "OPENOUT <filename>",
        documentation: new vscode.MarkdownString("Open an output file onto disc or cassette."),
        insertText: new vscode.SnippetString('OPENOUT "${1:filename}"')
    },
    {
        label: "ORIGIN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "ORIGIN <x>,<y>[<left>,<right>,<top>,<bottom>]",
        documentation: new vscode.MarkdownString("Determines the start point for the graphics cursor."),
        insertText: new vscode.SnippetString('ORIGIN ${1:x}, ${2:y}')
    },
    {
        label: "PAPER",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "PAPER [#<stream expr>,]<masked ink>",
        documentation: new vscode.MarkdownString("Sets the background **ink** for characters."),
        insertText: new vscode.SnippetString('PAPER ${1:ink}')
    },
    {
        label: "PEN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "PEN [#<stream expr>, ]<masked ink>",
        documentation: new vscode.MarkdownString("PEN sets the **ink** to be used when drawing."),
        insertText: new vscode.SnippetString('PEN ${1:ink}')
    },
    {
        label: "PLOT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "PLOT <x coord>,<y coord>[,<ink>][,<ink mode>]",
        documentation: new vscode.MarkdownString(
            "Plots a point on the graphics screen at the absolute position specified "+
            "in the **x**, **y** co-ordinates."),
        insertText: new vscode.SnippetString('PLOT ${1:x}, ${2:y}')
    },
    {
        label: "PLOTR",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "PLOTR <x offset>,<y offset>[,<ink>][,<ink mode>]",
        documentation: new vscode.MarkdownString(
            "Plots a point on the graphics screen at the relative position specified "+
            "in the **x**, **y** co-ordinates."),
        insertText: new vscode.SnippetString('PLOTR ${1:x}, ${2:y}')
    },
    {
        label: "POKE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "POKE <address expr>,<int expr>",
        documentation: new vscode.MarkdownString(
            "Provides direct access to the memory. Writes the **value** in "+
            "the range 0 to 255 directly into the specified memory **address**."),
        insertText: new vscode.SnippetString('POKE ${1:address}, ${2:value}')
    },
    {
        label: "PRINT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "PRINT [#<stream expr>,][list of: <print item>]",
        documentation: new vscode.MarkdownString(
            "Prints the list of **prompt**s to the given stream (to stream #0 if "+
            "it is not specified. A semicolon at the end avoids a carriage return."),
        insertText: new vscode.SnippetString('PRINT "${1:prompt}"')
    },
    {
        label: "SHARED",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "SHARED <list of: IDENT[[]]>",
        documentation: new vscode.MarkdownString(
            "Allow routines to access global variables. The use of brackets at the end "+
            "of the **ident** name means that the variable is an array (i.e SHARED myarray[])."),
        insertText: new vscode.SnippetString('SHARED ${1:ident}')
    },
    {
        label: "SPACE$",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "SPACE$(<int expression>)",
        documentation: new vscode.MarkdownString("Creates a string of **x** spaces."),
        insertText: new vscode.SnippetString('SPACE$(${1:x})')
    },
    {
        label: "SPC",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "SPC(<int expression>)",
        documentation: new vscode.MarkdownString("Prints the number of spaces specified by **chars**."),
        insertText: new vscode.SnippetString('SPC(${1:chars})')
    },
    {
        label: "SUB",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "SUB IDENT[(<formal parameters>)] [ASM]",
        documentation: new vscode.MarkdownString(
            "Allow the program to define procedures that can be invoked using CALL."),
        insertText: new vscode.SnippetString('SUB ${1:name}(${2:args})')
    },
    {
        label: "TAB",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "TAB(<integer expression>)",
        documentation: new vscode.MarkdownString(
            "Print the number of **spaces** relative to the left efge of the text window."),
        insertText: new vscode.SnippetString('TAB(${1:spaces})')
    },
    {
        label: "USING",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "USING <format template>;<expression>[,<expression>]*",
        documentation: new vscode.MarkdownString("Currently not supported by the ABASC compiler."),
        insertText: new vscode.SnippetString('USING "{1:pattern}", ${2:value}')
    },
    {
        label: "RAD",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "RAD",
        documentation: new vscode.MarkdownString("Set Radians Mode (see DEG)."),
        insertText: new vscode.SnippetString('RAD')
    },
    {
        label: "RANDOMIZE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "RANDOMIZE [<numeric expression>]",
        documentation: new vscode.MarkdownString(
            "Sets a new initial value for the random number generator."+
            "When no parameter is given, ABASC emits code as RANDOMIZE TIME was used."),
        insertText: new vscode.SnippetString('RANDOMIZE')
    },
    {
        label: "READ",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "READ <list of:IDENT>",
        documentation: new vscode.MarkdownString(
            "READ fetches data from the list of constants supplied in the corresponding "+
            "DATA statements."),
        insertText: new vscode.SnippetString('READ ${1:ident}')
    },
    {
        label: "READIN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "READIN <list of: IDENT>",
        documentation: new vscode.MarkdownString(
            "READIN is an alias of an INPUT #9,list-of-vars command. Used "+
            "to read from a file open using OPENIN keyword."),
        insertText: new vscode.SnippetString('READIN ${1:ident}')
    },
    {
        label: "RECORD",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "RECORD IDENT; IDENT[,IDENT]*",
        documentation: new vscode.MarkdownString(
            "Defines a series of patterns that can be used to access specific parts "+
            "of a string variable memory, so data can be store and manage as a struct."),
        insertText: new vscode.SnippetString('RECORD ${1:name}; ${2:variables}')
    },
    {
        label: "RELEASE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "RELEASE <sound channels>",
        documentation: new vscode.MarkdownString(
            "When a sound is placed on a sound queue it may include a hold state. If "+
            "any of the channels specified in this **channel** are in hold state, then they "+
            "are released, the expression to identify the sound channel is bit significant: "+
            "A bit 0, B bit 1, C bit 2."),
        insertText: new vscode.SnippetString('RELEASE ${1:channel}')
    },
    {
        label: "RENUM",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "RENUM [<line number>][,[<line number>][,<increment>]",
        documentation: new vscode.MarkdownString(
            "Renumber program lines. This command is ignored by ABASC compiler"),
        insertText: new vscode.SnippetString('RENUM')
    },
    {
        label: "RESTORE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "RESTORE [LINE|LABEL]",
        documentation: new vscode.MarkdownString(
            "Restores the position of the reading pointer back to the beginning or optional **label**."),
        insertText: new vscode.SnippetString('RESTORE ${1:label}')
    },
    {
        label: "RESUME",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "RESUME [LINE]",
        documentation: new vscode.MarkdownString(
            "RESUME allows normal program execution to continue when an error "+
            "has been trapped by an ON ERROR GOTO command. ABASC ignores this command."),
        insertText: new vscode.SnippetString('RESUME')
    },
    {
        label: "RETURN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "RETURN",
        documentation: new vscode.MarkdownString("Signals the end of a subroutine."),
        insertText: new vscode.SnippetString('RETURN')
    },
    {
        label: "RUN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "RUN [<str expr>|<int expr>]",
        documentation: new vscode.MarkdownString(
            "Loads a program (BASIC or binary) from disc or tape and start executing it."),
        insertText: new vscode.SnippetString('RUN')
    },
    {
        label: "SAVE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "SAVE <filename>[,<file type>][,<address>,<length>[,<entry point>]]",
        documentation: new vscode.MarkdownString(
            "Saves an area of memory to tape or disc. A fith optional parameter "+
            "allows to specify an entry point address."),
        insertText: new vscode.SnippetString('SAVE "${1:filename}, B, ${2:address}, ${3:length}"')
    },
    {
        label: "SELECT CASE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "SELECT CASE <int expression>",
        documentation: new vscode.MarkdownString(
            "Runs one of several groups of statements, depending on the value of **ident**."),
        insertText: new vscode.SnippetString('SELECT CASE ${1:ident}')
    },
    {
        label: "SOUND",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "SOUND <ch>,<tone>[,<dur>[,<vol>[,<venv>[,<tenv>[,<noise>]]]]",
        documentation: new vscode.MarkdownString(
            "Each SOUND channel has a queue of SOUND s to play. There is space "+
            "in this queue for five separate SOUND commands: one active and four waiting. "+
            "The operating system of the CPC464 can continue with other tasks while playing out "+
            "the sound queue, only returning when necessary to pick up more SOUND commands."),
        insertText: new vscode.SnippetString('SOUND ${1:channel}, ${2:period}, ${3:duration}, ${4:volume}, ${5:venv}, ${6:tenv}, ${7:noise}')
    },
    {
        label: "SPEED INK",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "SPEED INK <int expr>,<int expr>",
        documentation: new vscode.MarkdownString(
            "The first **time** specifies the time for the first INK, and the second **time** sets "+
            "the time for the second INK. Times are measured in units of 1/50 second. (50 Hz) "),
        insertText: new vscode.SnippetString('SPEED INK ${1:time1}, ${2:time2}')
    },
    {
        label: "SPEED KEY",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "SPEED KEY <start delay>,<repeat period>",
        documentation: new vscode.MarkdownString(
            "If held down continuously, the keys auto repeat at the **repeat** period after "+
            "the given **delay** period."),
        insertText: new vscode.SnippetString('SPEED KEY ${1:repeat}, ${2:delay}')
    },
    {
        label: "SPEED WRITE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "SPEED WRITE <int expression>",
        documentation: new vscode.MarkdownString(
            "The cassette can be witten at either 2000 baud (where **value** is 1), "+
        "or the default of 1000 baud (where the **value** is 0)."),
        insertText: new vscode.SnippetString('SPEED WRITE ${1:value}')
    },
    {
        label: "SYMBOL",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "SYMBOL <character number>,<list of: bytes>",
        documentation: new vscode.MarkdownString(
            "The SYMBOL command redefines the representation of a given "+
            "**char** that has first been specified in the SYMBOL AFTER command."),
        insertText: new vscode.SnippetString('SYMBOL ${1:char}, ${2:values}')
    },
    {
        label: "SYMBOL AFTER",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "SYMBOL AFTER <int expression>",
        documentation: new vscode.MarkdownString(
            "The number of user definable characters is set by the SYMBOL "+
            "AFTER command. The default setting is 240."),
        insertText: new vscode.SnippetString('SYMBOL AFTER ${1:value}')
    },
    {
        label: "TAG",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "TAG [#<stream expression>]",
        documentation: new vscode.MarkdownString(
            "Text sent to a given stream may be redirected to be written at the graphics "+
            "cursor position. This allows text and symbols to be mixed with graphics. "+
            "The stream expression defaults to 0 if omitted."),
        insertText: new vscode.SnippetString('TAG')
    },
    {
        label: "TAGOFF",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "TAGOFF [#<stream expression>]",
        documentation: new vscode.MarkdownString(
            "Cancels the TAG for a given stream, and sends the text to the previous "+
            "text cursor position at the point at which TAG was invoked."),
        insertText: new vscode.SnippetString('TAGOFF')
    },
    {
        label: "TRON",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "TRON",
        documentation: new vscode.MarkdownString(
            "BASIC includes the facility to trace the execution of a program, but "+
            "ABASC ignores these commands (TRON, TROFF)."),
        insertText: new vscode.SnippetString('TRON')
    },
    {
        label: "TROFF",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "TROFF",
        documentation: new vscode.MarkdownString(
            "BASIC includes the facility to trace the execution of a program, but "+
            "ABASC ignores these commands (TRON, TROFF)."),
        insertText: new vscode.SnippetString('TROFF')
    },
    {
        label: "THEN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "THEN <list of: statement>",
        documentation: new vscode.MarkdownString(""),
        insertText: new vscode.SnippetString('THEN')
    },
    {
        label: "STEP",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "STEP <int expression>",
        documentation: new vscode.MarkdownString(""),
        insertText: new vscode.SnippetString('STEP ${1:value}')
    },
    {
        label: "STOP",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "STOP",
        documentation: new vscode.MarkdownString("ABASC issues a system reboot for this command."),
        insertText: new vscode.SnippetString('STOP')
    },
    {
        label: "UNT",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Command",
        signature: "UNT(<address expression>)",
        documentation: new vscode.MarkdownString(
            "Converts an unsigned 16-bit integer in the range 0 to 65535. Returns an "+
            "integer value in the range -32768 to +32767."),
        insertText: new vscode.SnippetString('UNT(${1:x}')
    },
    {
        label: "WAIT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "WAIT <port number>,<mask>[,<inversion]",
        documentation: new vscode.MarkdownString(
            "Suspends operation until a given I/O **port** returns a "+
            "particular value in the range 0 to 255."),
        insertText: new vscode.SnippetString('WAIT ${1:port}, ${2:mask}')
    },
    {
        label: "WEND",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "WEND",
        documentation: new vscode.MarkdownString("End of a WHILE loop block."),
        insertText: new vscode.SnippetString('WEND')
    },
    {
        label: "WHILE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "WHILE <logical expression>",
        documentation: new vscode.MarkdownString(
            "A WHILE loop repeatedly executes a body of program until a "+
            "given condition is true."),
        insertText: new vscode.SnippetString('WHILE ${1:condition}')
    },
    {
        label: "WIDTH",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "WIDTH <integer expression>",
        documentation: new vscode.MarkdownString(
            "Tells BASIC how wide the printer is in characters. ABASC "+
            "ignores this command."),
        insertText: new vscode.SnippetString('WIDTH ${1:value}')
    },
    {
        label: "WINDOW",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "WINDOW [#<stream expr>,]<left>,<right>,<top>,<bottom>",
        documentation: new vscode.MarkdownString("Sets a text window for a given screen stream."),
        insertText: new vscode.SnippetString('WINDOW #${1:stream}, ${2:left}, ${3:right}, ${4:top}, ${5:bottom}')
    },
    {
        label: "WINDOW SWAP",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "WINDOW SWAP <stream expr>,<stream expr>",
        documentation: new vscode.MarkdownString("Exchanges the text windows."),
        insertText: new vscode.SnippetString('WINDOW SWAP ${1:stream1}, ${2:stream2}')
    },
    {
        label: "WRITE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "WRITE [#<stream expression >,][<list of: items>]",
        documentation: new vscode.MarkdownString(
            "Writes the list of **items** (strings or integers) to dist/tape."),
        insertText: new vscode.SnippetString('WRITE ${1:items}')
    },
    {
        label: "ZONE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        signature: "ZONE <int expression>",
        documentation: new vscode.MarkdownString(
            "Changes the **width** of the Print Zone used in PRINT, from the "+
            "default value of 13 to a new value in the range 1 to 255."),
        insertText: new vscode.SnippetString('ZONE ${1:width}')
    },
    {
        label: "ABS",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "ABS(<numeric expression>)",
        documentation: new vscode.MarkdownString(
            "Returns the absolute value of the given expression which "+
            "primarily means that negative numbers are returned as positive."),
        insertText: new vscode.SnippetString('ABS(${1:x})')
    },
    {
        label: "ASC",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "ASC(<string>)",
        documentation: new vscode.MarkdownString(
            "Gets the numeric value of the first character of a "+
            "**string** as long as ASCII characters are used."),
        insertText: new vscode.SnippetString('ASC("${1:string}")')
    },
    {
        label: "ATN",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "ATN(<numeric expression>)",
        documentation: new vscode.MarkdownString(
            "Calculates the arc-tangent (forcing the numeric expression) "+
            "to a real number ranging from -PI/2 to +PI/2 of the value specified."),
        insertText: new vscode.SnippetString('ATN(${1:x})')
    },
    {
        label: "BIN$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "BIN$(<unsigned integer expression>[,<integer expression>])",
        documentation: new vscode.MarkdownString(
            "Produces a string of binary digits that represents the value of **x**, "+
            "filling with leading zeros to the number of digits instructed by the second (and optional) "+
            "parameter. ABASC only supports 8 or 16 for **digits**."),
        insertText: new vscode.SnippetString('BIN$(${1:x}, ${2:digits})')
    },
    {
        label: "CHR$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "CHR$(<integer expression>)",
        documentation: new vscode.MarkdownString(
            "Converts **x** in the range 0 to 255, to its character "+
            "string equivalent. Note that 0 to 31 are control characters."),
        insertText: new vscode.SnippetString('CHR$(${1:x}')
    },
    {
        label: "CINT",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "CINT(<numeric expression>)",
        documentation: new vscode.MarkdownString(
            "Converts **x** value to a rounded integer in the range -32768..32767."),
        insertText: new vscode.SnippetString('CINT(${1:x})')
    },
    {
        label: "CREAL",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "CREAL(<numeric expression>)",
        documentation: new vscode.MarkdownString(
            "Converts **x** value to a real number (As opposed to integer)."),
        insertText: new vscode.SnippetString('CREAL(${1:x})')
    },
    {
        label: "COPYCHR$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "COPYCHR$(#<stream expression>)",
        documentation: new vscode.MarkdownString(
            "COPies ChaRacter from the current position in the stream (which MUST be "+
            "specified). If the character read is not recognized, a null string is returned."),
        insertText: new vscode.SnippetString('COPYCHR$(#${1:stream}')
    },
    {
        label: "COS",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "COS(<numeric expression>)",
        documentation: new vscode.MarkdownString(
            "Calculates the COSINE of **x**. The function defaults to radian "+
            "measure unless specifically instructed otherwise by the DEG command."),
        insertText: new vscode.SnippetString('COS(${1:x})')
    },
    {
        label: "DEC$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "DEC$(<numeric expression>,<format template>)",
        documentation: new vscode.MarkdownString(
            "Returns a DECimal string representation of **x**, using "+
            "the specified **template** to control the print format of the resulting string. "+
            "ABASC doesn't support templates yet so this command is basically equal to STR$."),
        insertText: new vscode.SnippetString('DEC$(${1:x}, "${2:template}")')
    },
    {
        label: "EOF",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "EOF",
        documentation: new vscode.MarkdownString(
            "Tests to see if the cassette input is at the end of the file. Returns -1 "+
            "(true) at the end, otherwise 0 (false)."),
        insertText: new vscode.SnippetString('EOF')
    },
    {
        label: "ERR",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "ERR",
        documentation: new vscode.MarkdownString("Reports the number of the last ERRor encountered."),
        insertText: new vscode.SnippetString('ERR')
    },
    {
        label: "ERL",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "ERL",
        documentation: new vscode.MarkdownString(
            "Reports the Line number of the last ERror encountered. "+
            "This statement is ignored by ABASC and always returns 0."),
        insertText: new vscode.SnippetString('ERL')
    },
    {
        label: "EXP",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "EXP(<numeric expression>)",
        documentation: new vscode.MarkdownString(
            "Calculates E to the power given in **x**, where E is approximately "+
            "2.7182818 - the number whose natural logarithm is 1."),
        insertText: new vscode.SnippetString('EXP(${1:x})')
    },
    {
        label: "FIX",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "FIX(<numeric expression>)",
        documentation: new vscode.MarkdownString(
            "Unlike CINT, FIX merely removes the part of the numeric expression, to "+
            "the right of the decimal point, and leaves an integer result, rounding towards zero."),
        insertText: new vscode.SnippetString('FIX(${1:x})')
    },
    {
        label: "FRE",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "FRE(<num expression>|<str expression>)",
        documentation: new vscode.MarkdownString(
            "Establishes how much memory remains unused by BASIC. In ABASC, "+
            "FRE(0) returns the amount of memory between end of the program and high jump block starting address. "+
            "FRE(1) return current available heap memory. "+
            'FRE("") forces a free of the heap used memory and returns same value as FRE(0)'),
        insertText: new vscode.SnippetString('FRE(${1:x}')
    },
    {
        label: "HEX$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "HEX$(<int expr>[,<int expr>])",
        documentation: new vscode.MarkdownString(
            "Converts the number given into Hexadecimal form. The **digits** "+
            "can be used to specify the minimum length of the result (valid values are 2 and 4)."),
        insertText: new vscode.SnippetString('HEX$(${1:x}, 4)')
    },
    {
        label: "HIMEM",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "HIMEM",
        documentation: new vscode.MarkdownString(
            "Originally, gave the address of the highest byte of memory used by BASIC. "+
            "ABASC uses this function to return the address where the compiled program "+
            "ends, which could be useful to issue Load commands."),
        insertText: new vscode.SnippetString('HIMEN')
    },
    {
        label: "INKEY",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "INKEY(<integer expression>)",
        documentation: new vscode.MarkdownString(
            "This function interrogates the keyboard to report which keys are being "+
            "pressed. [SHIFT] and [CTRL] are considered so this function may return -1, 0, 32, 128 or 160."),
        insertText: new vscode.SnippetString('INKEY(${1:k})')
    },
    {
        label: "INKEY$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "INKEY$",
        documentation: new vscode.MarkdownString(
            "Reads a key from the keyboard to provide operator interaction without "+
            "hitting [ENTER] after every answer. If no key is pressed, it returns an empty string."),
        insertText: new vscode.SnippetString('INKEY$')
    },
    {
        label: "INP",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "INP(<port number>)",
        documentation: new vscode.MarkdownString(
            "A function that returns the input value from the I/O port specified in the address."),
        insertText: new vscode.SnippetString('INP(${1:address})')
    },
    {
        label: "INSTR",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "INSTR(<int expr>,<string expr>,<string expr>)",
        documentation: new vscode.MarkdownString(
            "Searches the **source** string, for the first occurance of the **substring**, "+
            "where the optional number at the **start** indicates where to start the search - otherwise "+
            "the search begins at the first character of the **source** string (default for start is 1, "+
            "0 produces error)."),
        insertText: new vscode.SnippetString('INSTR(${1:start}, ${2:source}, ${3:substring})')
    },
    {
        label: "INT",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "INT(<numeric expression>)",
        documentation: new vscode.MarkdownString(
            "Rounds **x** to the nearest lower integer, removing any fractional "+
            "part. The same as FIX for positive numbers, but returns one less than FIX "+
            "for negative numbers not already integers."),
        insertText: new vscode.SnippetString('INT(${1:x})')
    },
    {
        label: "JOY",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "JOY(<integer expression>)",
        documentation: new vscode.MarkdownString(
            "The JOY function reads a bit-significant result from the joystick specified "+
            "in **device** (either 0 or 1)."),
        insertText: new vscode.SnippetString('JOY(${1:device})')
    },
    {
        label: "LEFT$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "LEFT$(<string expr>,<int expr>)",
        documentation: new vscode.MarkdownString(
            "Extracts characters to the left of, and including the position specified "+
            "in **pos** from the the given **source**. If the **source** is shorter than the "+
            "required length, the whole **source** is re-turned."),
        insertText: new vscode.SnippetString('LEFT$(${1:source}, ${2:pos})')
    },
    {
        label: "LEN",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "LEN(<string expression>)",
        documentation: new vscode.MarkdownString(
            "Returns the number of all types of characters, including spaces, "+
            "in the **source** string."),
        insertText: new vscode.SnippetString('LEN(${1:source})')
    },
    {
        label: "LOG10",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "LOG10(<numeric expression>)",
        documentation: new vscode.MarkdownString("Calculates the base 10 logarithm of **x**."),
        insertText: new vscode.SnippetString('LOG10(${1:x})')
    },
    {
        label: "LOG",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "LOG(<numeric expression>)",
        documentation: new vscode.MarkdownString("Calculates the natural logarithm of **x**."),
        insertText: new vscode.SnippetString('LOG(${1:x})')
    },
    {
        label: "LOWER$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "LOWER$(<string expression>)",
        documentation: new vscode.MarkdownString(
            "Returns a new string expression the same as **source** but "+
            "in which all upper case characters are converted to lower case."),
        insertText: new vscode.SnippetString('LOWER$(${1:source})')
    },
    {
        label: "MIN",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "MIN(<list of: <numeric expression>))",
        documentation: new vscode.MarkdownString(
            "Extracts the smallest value from the list of numeric expressions."),
        insertText: new vscode.SnippetString('MIN(${1:x1}, ${2:x2})')
    },
    {
        label: "MAX",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "MAX(<list of: numeric expression>))",
        documentation: new vscode.MarkdownString(
            "Extracts the largest value from the list of numeric expressions."),
        insertText: new vscode.SnippetString('MAX(${1:x1}, ${2:x2})')
    },
    {
        label: "MID$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "MID$(<string>,<int expr>[,<int expr>]))",
        documentation: new vscode.MarkdownString(
            "MID$ specifies part of **source** string which can be used either as "+
            "the destination of an assignment (MID$ as a command) or as an argument in "+
            "a string expression (MID$ as a Function). The **start** specifies the position "+
            "of the first character of the sub-string. The **chars** specifies the length of "+
            "the sub-string to be returned. If omitted, this extends to the end of the **source**."),
        insertText: new vscode.SnippetString('MID$(${1:source}, ${2:start}, ${3:chars})')
    },
    {
        label: "PEEK",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "PEEK(<address expression>)",
        documentation: new vscode.MarkdownString(
            "Examine the contents of a memory location which should be in the range "+
            "&0000 to &FFFF (0 to 65535)."),
        insertText: new vscode.SnippetString('PEEK(${1:address})')
    },
    {
        label: "PI",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "PI",
        documentation: new vscode.MarkdownString(
            "The value of the ratio between the circumference and the diameter of a circle. "+
            "It is used extensively in graphics routines such as the one listed above."),
        insertText: new vscode.SnippetString('PI')
    },
    {
        label: "POS",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "POS(#<stream expression>)",
        documentation: new vscode.MarkdownString(
            "Reports the current horizontal POSition of the text cursor relative to "+
            "the left edge of the text window. The **stream** MUST be specified, "+
            "and does NOT default to #0."),
        insertText: new vscode.SnippetString('POS(#${1:stream})')
    },
    {
        label: "REMAIN",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "REMAIN(<integer expression>)",
        documentation: new vscode.MarkdownString(
            "Returns the REMAINing count from the delay timer specified in **timer** "+
            "(in the range 0 to 3) and disable it."),
        insertText: new vscode.SnippetString('REMAIN ${1:timer}')
    },
    {
        label: "RIGHT$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "RIGHT$(<str expr>,<int expr>)",
        documentation: new vscode.MarkdownString(
            "Extracts the number of characters specified by **chars** from "+
            "the right of the **source** string. If the string is shorter than the "+
            "required length, the whole **source** string is returned."), 
        insertText: new vscode.SnippetString('RIGHT$(${1:source}, ${2:chars})')
    },
    {
        label: "RND",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "RND[(<int expression>)]",
        documentation: new vscode.MarkdownString(
            "Fetches a random number, which may be the next in sequence, a repeat of "+
            "the last one, or the first in a new sequence."),
        insertText: new vscode.SnippetString('RND')
    },
    {
        label: "ROUND",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "ROUND(<numeric expression>[,<int expression>])",
        documentation: new vscode.MarkdownString(
            "Rounds **x** to a number of decimal places or power of ten "+
            "specified in **digits**."),
        insertText: new vscode.SnippetString('ROUND(${1:x}, ${2:digits})')
    },
    {
        label: "SIN",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "",
        documentation: new vscode.MarkdownString(
            "Calculates the SINE of **x**. The function defaults to radian "+
            "measure unless specifically instructed otherwise by the DEG command."),
        insertText: new vscode.SnippetString('SIN(${1:x}')
    },
    {
        label: "SQ",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "SQ(<channel>)",
        documentation: new vscode.MarkdownString(
            "The SQ function is used to check the number of free entries in the queue for "+
            "a given **channel**, where channel A is 1, B is 2, and C is 4."),
        insertText: new vscode.SnippetString('SQ(${1:channel})')
    },
    {
        label: "SQR",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "SQR(<numeric expression>)",
        documentation: new vscode.MarkdownString("Returns the square root of **x**."),
        insertText: new vscode.SnippetString('SQR(${1:x})')
    },
    {
        label: "STR$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "STR$(<numeric expression>)",
        documentation: new vscode.MarkdownString(
            "Converts **x** to a decimal string representation in the "+
            "same form as used in the PRINT command."),
        insertText: new vscode.SnippetString('STR$(${1:x})')
    },
    {
        label: "STRING$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "STRING$(<int expr>,<character expr>)",
        documentation: new vscode.MarkdownString(
            "Delivers a string consisting of the specified **character** "+
            "repeated a number of **x** times."),
        insertText: new vscode.SnippetString('STRING$(${1:x}, ${2:char})')
    },
    {
        label: "SGN",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "SGN(<numeric expression>)",
        documentation: new vscode.MarkdownString(
            "Determines the sign of **x**. Returns -1 if **x** is less than 0. Returns "+
            "0 if **x** equal 0. Returns 1 if **x** is greater than zero."),
        insertText: new vscode.SnippetString('SGN(${1:x})')
    },
    {
        label: "TAN",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "TAN(<numeric expression>)",
        documentation: new vscode.MarkdownString(
            "Calculates the tangent for the angle given in **x**, which "+
            "must be in the range -200,000….+200,000, defaulting to radian measure "+
            "unless declared otherwise by a DEG command."),
        insertText: new vscode.SnippetString('TAN(${1:x})')
    },
    {
        label: "TEST",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "TEST(<x coord>,<y coord>)",
        documentation: new vscode.MarkdownString(
            "Reports the value of the ink currently at the specified graphics screen location."),
        insertText: new vscode.SnippetString('TEST(${1:x}, ${2:y})')
    },
    {
        label: "TESTR",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "TESTR(<x offset>,<y offset>)",
        documentation: new vscode.MarkdownString(
            "Moves the graphics cursor relatively from it's current location and reports "+
            "the value of the ink at the new location."),
        insertText: new vscode.SnippetString('TESTR(${1:x}, ${2:y})')
    },
    {
        label: "TIME",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "TIME [(<int expression>)]",
        documentation: new vscode.MarkdownString(
            "Holds the elapsed time since switch-on, excluding periods when reading or writing "+
            "the cassette (interrupts off). The units of time are 1/300th of a second."),
        insertText: new vscode.SnippetString('TIME')
    },
    {
        label: "UPPER$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "UPPER$(<string expression>)",
        documentation: new vscode.MarkdownString(
            "Returns a new string expression the same as the input **string** expression "+
            "but in which all lower case characters are converted to upper case."),
        insertText: new vscode.SnippetString('UPPER$("${1:string}")')
    },
    {
        label: "VAL",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "VAL(<string expression>)",
        documentation: new vscode.MarkdownString(
            "Extracts a numeric expression from the beginning of the **string**. "+
            "The opposite of STR$."),
        insertText: new vscode.SnippetString('VAL(${1:string})')
    },
    {
        label: "XPOS",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "XPOS",
        documentation: new vscode.MarkdownString("Returns the horizontal position of the graphics cursor."),
        insertText: new vscode.SnippetString('XPOS')
    },
    {
        label: "YPOS",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "YPOS",
        documentation: new vscode.MarkdownString("Returns the vertical position of the graphics cursor."),
        insertText: new vscode.SnippetString('YPOS(#${1:stream})')
    },
    {
        label: "VPOS",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        signature: "VPOS(#<stream expression>)",
        documentation: new vscode.MarkdownString("Returns the vertical position of the text cursor for the stream expression."),
        insertText: new vscode.SnippetString('VPOS(#${1:stream})')
    },
]
