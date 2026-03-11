import * as vscode from 'vscode';

export const BasicInfo: vscode.CompletionItem[] = [
    {
        label: "AFTER",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Invoke a subroutine after a given time period has elapsed. " +
        "**delay** indicates the period of the delay, in units of 1/50 seconds, " +
        "and optional **timer** (in range 0 to 3), indicates which of the " +
        "four available delay timers should be used.",
        insertText: new vscode.SnippetString('AFTER ${1:delay},${2:timer} GOSUB ${3:label}')
    },
    {
        label: "ASM",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Inserts the assembly code contained in **string**.",
        insertText: new vscode.SnippetString('ASM "${1:code}"')
    },
    {
        label: "AUTO",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Generate line numbers automatically. This command "+
        "is ignored by ABASC compiler.",
        insertText: new vscode.SnippetString('AUTO')
    },
    {
        label: "BORDER",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "To change the colour of the border on the screen. If two colours are "+
        "specified, the border alternates between the two at the rate determined "+
        "in the SPEED INK command, if given. The range of border colours is 0 to 26.",
        insertText: new vscode.SnippetString('BORDER ${1:colour}')
    },
    {
        label: "CALL",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Allows an externally developed sub-routine to be invoked from BASIC. "+
        "The routine is called with IX pointing to the list of parameters and A "+
        "containing the number of parameters. Parameters are passed in reverse "+
        "order, ie. (IX+0) is the last parameter supplied.",
        insertText: new vscode.SnippetString('CALL ${1:address}')
    },
    {
        label: "CASE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Specifies an option (must be a constant integer) inside a SELECT "+
        "CASE statement.",
        insertText: new vscode.SnippetString('CASE ${1:x}')
    },
    {
        label: "CASE DEFAULT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Specifies the default option for a SELECT CASE statement.",
        insertText: new vscode.SnippetString('CASE DEFAULT')
    },
    {
        label: "CAT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Causes BASIC to start reading the directory of the current drive "+
        "(cassette or disc) and to display the names of all files found. ",
        insertText: new vscode.SnippetString('CAT')
    },
    {
        label: "CHAIN MERGE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Appends the specified **file** code with the current program "+
        "code. In ABASC, it has the same utility than IMPORT or INCLUDE in other "+
        "languages or BASIC flavours.",
        insertText: new vscode.SnippetString('CHAIN MERGE "${1:file}"')
    },
    {
        label: "CHAIN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "CHAIN loads a program from disc or cassette into the memory; "+
        "replacing the existing program. ABASC ignores this command.",
        insertText: new vscode.SnippetString('CHAIN "${1:file}"')
    },
    {
        label: "CLEAR",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Clears all variables to zero or null. All open files are abandoned, all "+
        "arrays and user functions are erased, and BASIC is set to radians mode "+
        "of calculation. ",
        insertText: new vscode.SnippetString('CLEAR')
    },
{
        label: "CLEAR INPUT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Discards all previously typed input from the keyboard, still in the "+
        "arrays and user functions are erased, and BASIC is set to radians mode "+
        "okeyboard buffer. ",
        insertText: new vscode.SnippetString('CLEAR INPUT')
    },
    {
        label: "CLG",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Clears the graphics screen to the graphics paper colour. If an **ink** "+
        "(optional) is specified, the graphics paper is set to that value.",
        insertText: new vscode.SnippetString('CLG')
    },
    {
        label: "CLOSEIN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Close any input file from disc or cassette.",
        insertText: new vscode.SnippetString('CLOSEIN')
    },
    {
        label: "CLOSEOUT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Close any output file from disc or cassette.",
        insertText: new vscode.SnippetString('CLOSEOUT')
    },
    {
        label: "CLS",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Clear the given screen stream (window) to its paper ink. If no "+
        "**stream** is given, screen stream #0 is cleared.",
        insertText: new vscode.SnippetString('CLS')
    },
    {
        label: "CONST",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Declares a named constant, assigning a constant integer **value**. "+
        "When the named constant is used in an expression, its name is substituted by its value, "+
        "which may enable compiler optimizations.",
        insertText: new vscode.SnippetString('CONST ${1:ident} = ${2:value}')
    },
    {
        label: "CONT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Continue program execution after a *Break*, STOP or END. "+
        "In ABASC, it stops the execution of the program until a key is pressed.",
        insertText: new vscode.SnippetString('CONT')
    },
    {
        label: "CURSOR",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Sets the system switch or the user switch to the cursor, ON or OFF. The "+
        "**system** and **user** switches must be either 0 (OFF) or 1 (ON). "+
        "The cursor is displayed whenever both the **system** and **user** switches "+
        "are ON (1). The **system** is automatically turned OFF when printing" +
        "text to screen. Either swtich parameter may be omitted, but not both. If "+
        "a switch parameter is omitted, that particular switch state is not changed.",
        insertText: new vscode.SnippetString('CURSOR ${1:system}, ${2:user}')
    },  
    {
        label: "DATA",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Declares constant data for use within a program. One of the most widely "+
        "used features of BASIC that lumps constant data in DATA statements for "+
        "retrieval as required. The data type must be consistent with the variable "+
        "invoking it. A DATA statement may appear anywhere in a program. ",
        insertText: new vscode.SnippetString('DATA')
    },
    {
        label: "DECLARE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Declares a variable before being used. This allows users to set a size "+
        "lower than 254 for string using the statement FIXED.",
        insertText: new vscode.SnippetString('DECLARE ${1:ident}')
    },
    {
        label: "DEF FN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "BASIC allows the program to define and use simple value returning functions. "+
        "DEF FuNction is the definition part of this mechanism and creates program-specific "+
        "function which works within the program in the same way as a function such as "+
        "COS operates as a built-in function of BASIC. " +
        "It may be invoked throughout the program. Variable types must be consistent and "+
        "the DEF FuNction command should be written in part of the program outside "+
        "the execution loop.",
        insertText: new vscode.SnippetString('DEF FN${1:name}(${2:args}) = ${3:expression}')
    },
    {
        label: "DEFINT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Define variables matching the **range** as integer. "+
        "In ABASC, this command is ignored as type is integer by default and must be "+
        "explicitly changed using '!' suffix in variable names for reals.",
        insertText: new vscode.SnippetString('DEFINT ${1:range}')
    },
    {
        label: "DEFSTR",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "This command is ignored and has not effect in ABASC.",
        insertText: new vscode.SnippetString('DEFSTR ${1:range}')
    },
    {
        label: "DEFREAL",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "This command is ignored by ABASC. Type is integer by default and must "+
        "be explicitly changed using '!' suffix in variable names for reals.",
        insertText: new vscode.SnippetString('DEFREAL ${1:range}')
    },
    {
        label: "DEG",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Set degrees mode. The default condition is for functions such as SIN and "+
        "COS is to assume radian measure for numeric data. The command sets to "+
        "degree mode until instructed otherwise by a CLEAR or RAD or if any new "+
        "program is loaded.",
        insertText: new vscode.SnippetString('DEG')
    },
    {
        label: "DELETE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Originally, a command that removes part of the current program as "+
        "defined in the line number **range**. ABASC reuses this command to fill memory with 0s. "+
        "Therefore, the range indicates the memory range and not line numbers.",
        insertText: new vscode.SnippetString('DELETE ${1:range}')
    },
    {
        label: "DI",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Disable interrupts until re-enabled explicitly by EI or "+
        "implicitly by the RETURN at the end of an interrupt GOSUB routine.",
        insertText: new vscode.SnippetString('DI')
    },
    {
        label: "DIM",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Allocate space for arrays and specify maximum **subscript** values. Basic must be "+
        "advised of the space to be reserved for an array, or it will default to 10. "+
        "Once set either implicitly or explicitly, the size of the array may not be changed. "+
        "Item count starts in 0 and goes up to the given subscript value.",
        insertText: new vscode.SnippetString('DIM ${1:variable}(${2:subscripts})')
    },
    {
        label: "DRAW",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Draws a line on the screen from the current graphics cursor position to "+
        "an absolute position. The co-ordinate positions remain unchanged between "+
        "the three different screen modes. An **ink** optional third parameter to draw "+
        "the line may be specified (in the range 0 to 15). The optional fourth **ink mode** "+
        "determines how the ink being written interacts with that already on the graphics "+
        "screen. The four **ink mode**s are "+
        "0: Fill (normal), "+
        "1: XOR (eXclusive OR), "+
        "2: AND, "+
        "3: OR, ",
        insertText: new vscode.SnippetString('DRAW ${1:x}, ${2:y}')
    },
    {
        label: "DRAWR",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "To draw a line on the screen from the current graphics "+
        "cursor position to a position relative to it. The **ink** (optional third parameter) "+
        " in which to draw the line may be specified (in the range 0 to 15). "+
        "The optional fourth **ink mode** parameter determines how the ink being "+
        "written interacts with that already on the graphics screen. The four **ink mode**s are "+
        "0: Normal, "+
        "1: XOR (eXclusive OR), "+
        "2: AND, "+
        "3: OR, ",
        insertText: new vscode.SnippetString('DRAWR ${1:x}, ${2:y}')
    },
    {
        label: "EDIT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Edit a program line by calling for a specific line number. "+
        "This command is ignored by ABASC.",
        insertText: new vscode.SnippetString('EDIT')
    },
    {
        label: "EI",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Enable interrupts disabled by a DI command.",
        insertText: new vscode.SnippetString('EI')
    },
    {
        label: "ELSE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('ELSE')
    },
    {
        label: "END",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "End of program. ABASC generates a infinity loop.",
        insertText: new vscode.SnippetString('END')
    },
    {
        label: "END IF",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "End of a multiline IF block.",
        insertText: new vscode.SnippetString('END IF')
    },
    {
        label: "END FUNCTION",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Signals the end of a user defined FUNCTION. BASIC returns to continue "+
        "processing at the point after the expression which invoked it. Arriving "+
        "here is usually an error, as RETURN must be used to send back a result "+
        "of a function.",
        insertText: new vscode.SnippetString('END FUNCTION')
    },
    {
        label: "END SUB",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Signals the end of a subroutine. BASIC returns to continue processing at "+
        "the point after the CALL which invoked it.",
        insertText: new vscode.SnippetString('END')
    },
    {
        label: "END SELECT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "End of a SELECT CASE block.",
        insertText: new vscode.SnippetString('END SELECT')
    },
    {
        label: "ENT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Sets the Tone ENvelope specified in the envelope **section** (in the "+
        "range 1 to 15), which is used in conjunction with the SOUND command. "+
        "If the **envelope** is negative (in the range -1 to -15), the envelope "+
        "repeats until the end of the duration of the SOUND command. "+
        "Each of the envelope **section**s may contain either 2 ou 3 parameters: "+
        "Parameter 1: **number of steps** (0 to 239). "+
        "Parameter 2: **step size** (-128 to +127). "+
        "Parameter 3: **pause time** "+
        "OR "+
        "Parameter 1: **tone period** (See parameter 2 of the SOUND command). "+
        "Parameter 2: **pause time**",
        insertText: new vscode.SnippetString('ENT ${1:envelope}, ${2:sections}')
    },
    {
        label: "ENV",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Sets the volume envelope specified in the **envelope** number (in the range 1 to 15), "+
        "which is used in conjunction with the SOUND command. Each of the enveloppe **section**s "+
        "may contain either 2 or 3 parameters: "+
        "Parameter 1: **number of steps** (0 to 127). "+
        "Parameter 2: **step size** (-128 and +127). "+
        "Parameter 3: **pause time** (0 to 255). "+
        "OR "+
        "Parameter 1: **hardware envelope** the value to send to the envelope shape register. "+
        "Parameter 2: **envelope period** the value to send to the envelope period registers. ",
        insertText: new vscode.SnippetString('ENV ${1:envelop}, ${2:sections}')
    },
    {
        label: "ERASE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Originally, when an array was no longer required, could be ERASEd "+
        "and the memory used be reclaimed ready for other use. However, this has no effect in "+
        "ABASM.",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "ERROR",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Sets the runtime variable that can be retrieve with ERR",
        insertText: new vscode.SnippetString('ERROR ${1:x}')
    },
    {
        label: "EVERY",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "The EVERY command allows a BASIC program to arrange for subroutines to "+
        "be called at regular **interval**s. Four delay **timer**s are available, specified "+
        "by an optional 2nd int expression in the range 0 to 3 each of which may have a "+
        "subroutine associated with it.",
        insertText: new vscode.SnippetString('EVERY ${1:interval}, ${2:timer} GOSUB ${3:label}')
    },
    {
        label: "EXIT FOR",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Interrupts a FOR ... NEXT loop and transfers the control to the line "+
        "just after the NEXT keyword.",
        insertText: new vscode.SnippetString('EXIT FOR')
    },
    {
        label: "EXIT WHILE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Interrupts a WHILE ... WEND loop and transfers the control to the line "+
        "just after the WEND keyword.",
        insertText: new vscode.SnippetString('EXIT WHILE')
    },
    {
        label: "FIXED",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Sets a string maximum length to be **x** instead of 254.",
        insertText: new vscode.SnippetString('FIXED ${1:x}')
    },
    {
        label: "FRAME",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Synchronises the writing of the graphics on the screen with the frame "+
        "flyback (VSYNC) of the display. The overall effect of this is that "+
        "character or graphics movement on the screen will appear to be smoother, "+
        "without flickering or tearing.",
        insertText: new vscode.SnippetString('FRAME')
    },
    {
        label: "FOR",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Execute a body of program a given number of times, stepping a control "+
        "variable between a start and an end value. If not specified, STEP defaults to 1.",
        insertText: new vscode.SnippetString('FOR ${1:var}=${2:start} TO {3:end}')
    },
    {
        label: "FUNCTION",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "FUNCTION allows the program to define routines that returns a value. "+
        "They may be invoked throughout the program as regular functions. Argument types "+
        "must be consistent and the FUNCTION command should be written BEFORE the function "+
        "is called.",
        insertText: new vscode.SnippetString('FUNCTION ${1:name}(${2:args})')
    },
    {
        label: "GOSUB",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Call a BASIC subroutine by branching to the specified line number or label.",
        insertText: new vscode.SnippetString('GOSUB ${1:label}')
    },
    {
        label: "GOTO",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Branch to specified line number or label.",
        insertText: new vscode.SnippetString('GOTO ${1:label}')
    },
    {
        label: "GRAPHICS PAPER",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Sets the **ink** of the graphics paper, ie. the area behind graphics drawn "+
        "on the screen. When drawing continuous lines, the graphics papers will "+
        "not be seen. The graphics paper's ink (in the range 0 to 15) is used for "+
        "the paper area of characters written when TAG is in operation, and as the "+
        "default when clearing the graphics window, using CLG.",
        insertText: new vscode.SnippetString('GRAPHICS PAPER ${1:ink}')
    },
    {
        label: "GRAPHICS PEN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Set the **ink** (in the range 0 to 15) to be used for drawing lines and "+
        "plotting points. The graphics optional background **mode** can also be set to either "+
        "0: Opaque background or 1: Transparent background. "+
        "Transparent background affects the graphics paper of characters written "+
        "with TAG on, and the gaps in dotted lines.",
        insertText: new vscode.SnippetString('GRAPHICS PEN ${1:ink}')
    },
    {
        label: "IF",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "It is used to conditionally determine branch points in a program. The "+
        "logical part is evaluated, and if true the THEN or GOTO part is executed, "+
        "if false, the program skips to the ELSE part, or merely passes onto the "+
        "next line.",
        insertText: new vscode.SnippetString('IF ${1:cond} THEN')
    },
    {
        label: "INK",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Assigns colour(s) to a given **ink**. The **ink** parameter describes the ink "+
        "reference, which must be an integer expression in the range 0 to 15, for "+
        "use in the appertaining PEN or PAPER command. The first **colour** "+
        "parameter should be an integer expression yielding a colour value in the "+
        "range 0 to 26. If an optional second **colour** is specified, the ink "+
        "alternates between the two colours, at a rate determined by SPEED INK "+
        "command. Depending on the current screen mode, a number of INKs are available. "+
        "**NOTE**: Ink values are not sent to the hardware until the next FLYBACK (VSYNC) event.",
        insertText: new vscode.SnippetString('INK ${1:ink}, ${2:colour}')
    },
    {
        label: "INPUT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Reads data from the stated stream. A semicolon after INPUT suppresses the "+
        "carriage return typed at the end of the line being entered. A semicolon "+
        "after the **prompt** causes a question mark to be displayed. "+
        "A comma suppresses the question mark. All responses must be terminated "+
        "with an [ENTER].",
        insertText: new vscode.SnippetString('INPUT "${1:prompt}", ${2:ident}')
    },
    {
        label: "KEY DEF",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "DEFines the KEY values to be returned by the specified <key number> in the "+
        "range 0 to 79. This command has no effect in ABASC and its ignored by the compiler.",
        insertText: new vscode.SnippetString('KEY DEF ${1:key}, ${2:repeat}')
    },
    {
        label: "KEY",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Fixes a new function key definition. ABASC ignores this command.",
        insertText: new vscode.SnippetString('KEY ${1:key}, ${2:func}')
    },
    {
        label: "LABEL",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Defines a user label that can be used in GOSUB or GOTO calls.",
        insertText: new vscode.SnippetString('LABEL ${1:label}')
    },
    {
        label: "LET",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "A remnant from early BASICS where variable assignments had to be seen coming.",
        insertText: new vscode.SnippetString('LET ${1:ident} = ${2:value}')
    },
    {
        label: "LINE INPUT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Reads an entire line from the stream indicated. The first optional semicolon "+
        "suppresses the echo of carriage return / line feed. The default **stream** is #0 :screen "+
        "being #9 the current open file.", 
        insertText: new vscode.SnippetString('LINE INPUT #${1:stream}, "${2:prompt}, {3:ident}')
    },
    {
        label: "LIST",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "List program lines to the given stream. This command is ignored by ABASC compiler.",
        insertText: new vscode.SnippetString('LIST')
    },
    {
        label: "LOAD",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "To read a **file** from disc or cassette into memory at the "+
        "given **address**.",
        insertText: new vscode.SnippetString('LOAD "${1:file}", ${2:address}')
    },
    {
        label: "LOCATE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Moves the text cursor at the stream indicated, to the position specified "+
        "by the x and y co-ordinates, which are relative to the origin of the "+
        "stream (WINDOW). Stream 0 is the default stream.",
        insertText: new vscode.SnippetString('LOCATE ${1:x}, ${2:y}')
    },
    {
        label: "MASK",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Sets the mask or template to be used when drawing lines. The binary value "+
        "of the **patern** in the range 0 to 255, sets the bits in each adjacent "+
        "group of 8 pixels to ON (1) or OFF (0). The optional **first point setting** "+
        "determines whether the first point of the line is to be plotted (1) or not plotted (0).",
        insertText: new vscode.SnippetString('MASK ${1:pattern}')
    },    
    {
        label: "MEMORY",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "MEMORY sets the limit for the compiled program so "+
        "it gives an error if the output binary exceedes that limit",
        insertText: new vscode.SnippetString('MEMORY ${1:limit}')
    },
    {
        label: "MODE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Change the screen mode (0,1 or 2), and clear the screen to INK 0",
        insertText: new vscode.SnippetString('MODE ${1:value}')
    },
    {
        label: "MOVE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "To move the graphics cursor to a position specified by **x** and **y**. "+
        "The optionnal **ink** parameter can be used to specify the graphic pen "+
        "(in the range 0 to 15). The optional **ink mode** determines how the ink "+
        "being written interacts with that already on the graphics screen: FILL, XOR, AND, OR.",
        insertText: new vscode.SnippetString('MOVE ${1:x}, ${2:y}')
    },
    {
        label: "MOVER",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "To move the graphics cursor relative to a position specified by **x** and **y**. "+
        "The optionnal **ink** parameter can be used to specify the graphic pen "+
        "(in the range 0 to 15). The optional **ink mode** determines how the ink "+
        "being written interacts with that already on the graphics screen: FILL, XOR, AND, OR.",
        insertText: new vscode.SnippetString('MOVER ${1:x}, ${2:y}')
    },
    {
        label: "NEW",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Delete current program and variables. ABASC issues a machine reset for this command.",
        insertText: new vscode.SnippetString('NEW')
    },
    {
        label: "NEXT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Marks the end of a FOR block.",
        insertText: new vscode.SnippetString('NEXT')
    },
    {
        label: "ON GOTO",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "GOTO to the subroutine as directed by the result of the **value**. "+
        "If the result is 1, then the first label in the list is chosen, "+
        "if 2 then the second etc.",
        insertText: new vscode.SnippetString('ON ${1:value} GOTO ${2:labels}')
    },
    {
        label: "ON GOSUB",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "GOSUB to the subroutine as directed by the result of the **value**. "+
        "If the result is 1, then the first label in the list is chosen, "+
        "if 2 then the second etc.",
        insertText: new vscode.SnippetString('ON ${1:value} GOSUB ${2:labels}')
    },
    {
        label: "ON BREAK CONT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Disables the option to break a program pressing "+
        "the escape key twice. This is the default bahaviour of ABASC programs.",
        insertText: new vscode.SnippetString('ON BREAK CONT')
    },
    {
        label: "ON BREAK CONT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Disables the option to break a program pressing "+
        "the escape key twice. This is the default bahaviour of ABASC programs.",
        insertText: new vscode.SnippetString('ON BREAK CONT')
    },
    {
        label: "ON BREAK STOP",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Disables the trap created by ON BREAK GOSUB but "+
        "no other immediate effect. This is the default bahaviour of ABASC programs.",
        insertText: new vscode.SnippetString('ON BREAK CONT')
    },
    {
        label: "ON BREAK GOSUB",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Calls a subroutine on breaking from program execution by pressing [ESC] "+
        "twice. This command is ignored by ABASC and has no effect.",
        insertText: new vscode.SnippetString('ON BREAK GOSUB ${1:label}')
    },
    {
        label: "ON ERROR GOTO",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Go to **label** if ERR variable is <> 0",
        insertText: new vscode.SnippetString('ON ERROR GOTO ${1:label}')
    },
    {
        label: "ON SQ",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Enable an interrupt for when there is a free slot in the given sound queue. "+
        "The **channel** must be 1 for channel A, 2 for channel B or 4 for channel C.",
        insertText: new vscode.SnippetString('ON SQ(${1:channel}) GOTO ${2:label}')
    },
    {
        label: "OUT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Sends **value** (which must lie in the range 0 to 255) to "+
        "the port address specified in the **port**.",
        insertText: new vscode.SnippetString('OUT ${1:value}, ${2:port}')
    },
    {
        label: "OPENIN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Opens an input file from disc or cassette which contains information for "+
        "use in the current program in the computer's memory. "+
        "If tape deck is selected and the first character in the <file name> is ! "+
        "then the displayed cassette processing messages are suppressed. The program "+
        "reads in the first block from the cassette, ready for processing. "+
        "The input file to open myst be an ASCII file. ",
        insertText: new vscode.SnippetString('OPENIN "${1:filename}"')
    },
    {
        label: "OPENOUT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Opens an output file onto disc or cassette. If the tape deck is selected "+
        "and the first character in the <file name> is ! then the displayed cassette "+
        "processing messages are suppressed. The program creates the first block of data, "+
        "in the file with the given name. Each block consists of up to 2048 bytes of data.",
        insertText: new vscode.SnippetString('OPENOUT "${1:filename}"')
    },
    {
        label: "ORIGIN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Determines the start point for the graphics cursor. The optional part "+
        "of the command contains the instructions to set a new graphics window, which will "+
        "be operational in all screen modes due the pixel addressing technique employed.",
        insertText: new vscode.SnippetString('ORIGIN ${1:x}, ${2:y}')
    },
    {
        label: "PAPER",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Sets the background **ink** for characters. When characters are written to "+
        "the text screen, the character cell is filled with the PAPER ink before "+
        "the character is written, unless the transparent mode has been selected.",
        insertText: new vscode.SnippetString('PAPER ${1:ink}')
    },
    {
        label: "PEN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "PEN sets the ink to be used when drawing at the given screen stream, "+
        "defaulting to screen #0.",
        insertText: new vscode.SnippetString('PEN ${1:ink}')
    },
    {
        label: "PLOT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Plots a point on the graphics screen at the absolute position specified "+
        "in the **x**, **y** co-ordinates. The **ink** in which to plot the point may be specified "+
        "(in the range 0 to 15). The optional **ink mode** determines how the ink being written interacts "+
        "with that already on the graphics screen: FILL, XOR, AND, OR.",
        insertText: new vscode.SnippetString('PLOT ${1:x}, ${2:y}')
    },
    {
        label: "PLOTR",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Plots a point on the graphics screen at the relative position specified "+
        "in the **x**, **y** co-ordinates. The **ink** in which to plot the point may be specified "+
        "(in the range 0 to 15). The optional **ink mode** determines how the ink being written interacts "+
        "with that already on the graphics screen: FILL, XOR, AND, OR.",
        insertText: new vscode.SnippetString('PLOTR ${1:x}, ${2:y}')
    },
    {
        label: "POKE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Provides direct access to the memory. Writes the **value** in "+
        "the range 0 to 255 directly into the specified memory **address**.",
        insertText: new vscode.SnippetString('POKE ${1:address}, ${2:value}')
    },
    {
        label: "PRINT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Prints the list **prompt**s to the given stream (to stream #0 if "+
        "it is not specified. A semicolon at the end avoids a carriage return.",
        insertText: new vscode.SnippetString('PRINT "${1:prompt}"')
    },
    {
        label: "SHARED",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Allow routines to access global variables declared "+
        "in the main program. The use of brackets at the end of the **ident** name means "+
        "that the variable is an array (i.e SHARED myarray[]).",
        insertText: new vscode.SnippetString('SHARED ${1:ident}')
    },
    {
        label: "SPC",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Prints the number of spaces specified by **chars**.",
        insertText: new vscode.SnippetString('SPC(${1:chars})')
    },
    {
        label: "SUB",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "TAB",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "USING",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "RAD",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Set Radians Mode (see DEG).",
        insertText: new vscode.SnippetString('RAD')
    },
    {
        label: "RANDOMIZE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Sets a new initial value for the random number generator. "+
        "When no parameter is given, ABASC emits code as RANDOMIZE TIME was used.",
        insertText: new vscode.SnippetString('RANDOMIZE')
    },
    {
        label: "READ",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "READ fetches data from the list of constants supplied in the corresponding "+
        "DATA statements and assigns it to variables, automatically stepping to the "+
        "next item in the data statement. RESTORE will return the pointer to the "+
        "beginning of the DATA statement. See the DATA keyword.",
        insertText: new vscode.SnippetString('READ ${1:ident}')
    },
    {
        label: "READIN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "READIN is an alias of an INPUT #9,list-of-vars command. Used "+
        "to read from a file open using OPENIN keyword.",
        insertText: new vscode.SnippetString('READIN ${1:ident}')
    },
    {
        label: "RECORD",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Defines a series of patterns that can be used to access specific parts "+
        "of a string variable memory, so data can be store and manage as a struct or record.",
        insertText: new vscode.SnippetString('RECORD ${1:name}; ${2:variables}')
    },
    {
        label: "RELEASE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "When a sound is placed on a sound queue it may include a hold state. If "+
        "any of the channels specified in this **channel** are in hold state, then they "+
        "are released, the expression to identify the sound channel is bit significant: "+
        "A bit 0, B bit 1, C bit 2.",
        insertText: new vscode.SnippetString('RELEASE ${1:channel}')
    },
    {
        label: "RENUM",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Renumber program lines. This command is ignored by ABASC compiler",
        insertText: new vscode.SnippetString('RENUM')
    },
    {
        label: "RESTORE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Restores the position of the reading pointer back to the beginning of the "+
        "DATA statement specified in the optional <line number> or <label>. Omitting "+
        "the parameter restores the position of the pointer back to the beginning "+
        "of the first DATA statement.",
        insertText: new vscode.SnippetString('RESTORE ${1:label}')
    },
    {
        label: "RESUME",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "RESUME allows normal program execution to continue when an error "+
        "has been trapped by an ON ERROR GOTO command. ABASC ignores this command.",
        insertText: new vscode.SnippetString('RESUME')
    },
    {
        label: "RETURN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Signals the end of a subroutine. BASIC returns to continue processing at "+
        "the point after the GOSUB which invoked it.",
        insertText: new vscode.SnippetString('RETURN')
    },
    {
        label: "RUN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Loads a program (BASIC or binary) from disc or tape and start executing it.",
        insertText: new vscode.SnippetString('RUN')
    },
    {
        label: "SAVE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Saves an area of memory to tape or disc. A fith optional parameter allows to specify an entry point address",
        insertText: new vscode.SnippetString('SAVE "${1:filename}, B, ${2:address}, ${3:length}"')
    },
    {
        label: "SELECT CASE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "Runs one of several groups of statements, depending on the value of **ident**.",
        insertText: new vscode.SnippetString('SELECT CASE ${1:ident}')
    },
    {
        label: "SOUND",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "STEP",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "SPEED INK",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "The INK and BORDER commands allow two colours to be associated with each Ink, "+
        "in which case the INK alternates between the two colours. The first **time** specifies the time "+
        "for the first INK, and the second **time** sets the time for the second INK. Times between colour "+
        "changes are measured in units of 1/50 second. (50 Hz) ",
        insertText: new vscode.SnippetString('SPEED INK ${1:time1}, {2:time2}')
    },
    {
        label: "SPEED KEY",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "If held down continuously, the keys auto repeat at the **repeat** period> after "+
        "the given **delay** period.",
        insertText: new vscode.SnippetString('SPEED KEY ${1:repeat}, {2:delay}')
    },
    {
        label: "SPEED WRITE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "The cassette can be witten at either 2000 baud (where **value** is 1), "+
        "or the default of 1000 baud (where the **value** is 0).",
        insertText: new vscode.SnippetString('SPEED WRITE ${1:value}')
    },
    {
        label: "SYMBOL",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "SWAP",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "TAG",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "TAGOFF",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "TRON",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "TROFF",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "THEN",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "TO",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "STEP",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "STOP",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "ABASC issues a system reboot for this command.",
        insertText: new vscode.SnippetString('STOP')
    },
    {
        label: "UNT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "WAIT",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "WEND",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "WHILE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "WIDTH",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "WINDOW",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "WRITE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "ZONE",
        kind: vscode.CompletionItemKind.Keyword,
        detail: "Locomotive BASIC Command",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "ABS",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "ASC",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Gets the numeric value of the first character of a "+
        "**string** as long as ASCII characters are used.",
        insertText: new vscode.SnippetString('ASC("${1:string}")')
    },
    {
        label: "ATN",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Calculates the arc-tangent (forcing the numeric expression) "+
        "to a real number ranging from -PI/2 to +PI/2 of the value specified.",
        insertText: new vscode.SnippetString('ATN(${1:x})')
    },
    {
        label: "BIN$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Produces a string of binary digits that represents the value of **x**, "+
        "filling with leading zeros to the number of digits instructed by the second (and optional) "+
        "parameter. ABASC only supports 8 or 16 for **digits**.",
        insertText: new vscode.SnippetString('BIN$(${1:x}, ${2:digits})')
    },
    {
        label: "CHR$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Converts **x** in the range 0 to 255, to its character "+
        "string equivalent. Note that 0 to 31 are control characters.",
        insertText: new vscode.SnippetString('CHR$(${1:x}')
    },
    {
        label: "CINT",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Converts **x** value to a rounded integer in the range -32768..32767.",
        insertText: new vscode.SnippetString('CINT(${1:x})')
    },
    {
        label: "CREAL",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Converts **x** value to a real number (As opposed to integer).",
        insertText: new vscode.SnippetString('CREAL(${1:x})')
    },
    {
        label: "COPYCHR$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: " COPies ChaRacter from the current position in the stream (which MUST be "+
        "specified). If the character read is not recognized, a null string is returned.",
        insertText: new vscode.SnippetString('COPYCHR$(#${1:stream}')
    },
    {
        label: "COS",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Calculates the COSINE of **x**. The function defaults to radian "+
        "measure unless specifically instructed otherwise by the DEG command.",
        insertText: new vscode.SnippetString('COS(${1:x})')
    },
    {
        label: "DEC$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Returns a DECimal string representation of **x**, using "+
        "the specified **template** to control the print format of the resulting string. "+
        "ABASC doesn't support templates yet so this command is basically equal to STR$",
        insertText: new vscode.SnippetString('DEC$(${1:x}, "${2:template}")')
    },
    {
        label: "EOF",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Tests to see if the cassette input is at the end of the file. Returns -1 "+
        "(true) at the end, otherwise 0 (false).",
        insertText: new vscode.SnippetString('EOF')
    },
    {
        label: "ERR",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Reports the number of the last ERRor encountered.",
        insertText: new vscode.SnippetString('ERR')
    },
    {
        label: "ERL",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Reports the Line number of the last ERror encountered. "+
        "This statement is ignored by ABASC and always returns 0.",
        insertText: new vscode.SnippetString('ERL')
    },
    {
        label: "EXP",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Calculates E to the power given in **x**, where E is approximately "+
        "2.7182818 - the number whose natural logarithm is 1.",
        insertText: new vscode.SnippetString('EXP(${1:x})')
    },
    {
        label: "FIX",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Unlike CINT, FIX merely removes the part of the numeric expression, to "+
        "the right of the decimal point, and leaves an integer result, rounding towards zero.",
        insertText: new vscode.SnippetString('FIX(${1:x})')
    },
    {
        label: "FRE",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Establishes how much memory remains unused by BASIC. In ABASC, "+
        "FRE(0) returns the amount of memory between end of the program and high jump block starting address. "+
        "FRE(1) return current available heap memory. "+
        'FRE("") forces a free of the heap used memory and returns same value as FRE(0)',
        insertText: new vscode.SnippetString('FRE(${1:x}')
    },
    {
        label: "HEX$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Converts the number given into Hexadecimal form. The **digits** "+
        "can be used to specify the minimum length of the result (valid values are 2 and 4).",
        insertText: new vscode.SnippetString('HEX$(${1:x}, 4)')
    },
    {
        label: "HIMEM",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Originally, gave the address of the highest byte of memory used by BASIC. "+
        "ABASC uses this function to return the address where the compiled program "+
        "ends, which could be useful to issue Load commands",
        insertText: new vscode.SnippetString('HIMEN')
    },
    {
        label: "INKEY",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "This function interrogates the keyboard to report which keys are being "+
        "pressed. [SHIFT] and [CTRL] are considered so this function may return -1, 0, 32, 128 or 160.",
        insertText: new vscode.SnippetString('INKEY(${1:k})')
    },
    {
        label: "INKEY$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Reads a key from the keyboard to provide operator interaction without "+
        "hitting [ENTER] after every answer. If no key is pressed, it returns an empty string.",
        insertText: new vscode.SnippetString('INKEY$')
    },
    {
        label: "INP",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "A function that returns the input value from the I/O port specified in the address.",
        insertText: new vscode.SnippetString('INP(${1:address})')
    },
    {
        label: "INSTR",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Searches the **source** string, for the first occurance of the **substring**, "+
        "where the optional number at the **start** indicates where to start the search - otherwise "+
        "the search begins at the first character of the **source** string (default for start is 1, "+
        "0 produces error).",
        insertText: new vscode.SnippetString('INSTR(${1:start}, ${2:source}, ${3:substring})')
    },
    {
        label: "INT",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Rounds **x** to the nearest lower integer, removing any fractional "+
        "part. The same as FIX for positive numbers, but returns one less than FIX "+
        "for negative numbers not already integers.",
        insertText: new vscode.SnippetString('INT(${1:x})')
    },
    {
        label: "JOY",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "The JOY function reads a bit-significant result from the joystick specified "+
        "in **device** (either 0 or 1).",
        insertText: new vscode.SnippetString('JOY(${1:device})')
    },
    {
        label: "LEFT$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Extracts characters to the left of, and including the position specified "+
        "in **pos** from the the given **source**. If the **source** is shorter than the required length, the whole **source** is "+
        "re-turned.",
        insertText: new vscode.SnippetString('LEFT$(${1:source}, ${2:pos})')
    },
    {
        label: "LEN",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Returns the number of all types of characters, including spaces, "+
        "in the **source** string.",
        insertText: new vscode.SnippetString('LEN(${1:source})')
    },
    {
        label: "LOG10",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Calculates the base 10 logarithm of **x**.",
        insertText: new vscode.SnippetString('LOG10(${1:x})')
    },
    {
        label: "LOG",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Calculates the natural logarithm of **x**.",
        insertText: new vscode.SnippetString('LOG(${1:x})')
    },
    {
        label: "LOWER$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Returns a new string expression the same as **source** but "+
        "in which all upper case characters are converted to lower case.",
        insertText: new vscode.SnippetString('LOWER$(${1:source})')
    },
    {
        label: "MIN",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Extracts the smallest value from the list of numeric expressions.",
        insertText: new vscode.SnippetString('MIN(${1:x1}, ${2:x2})')
    },
    {
        label: "MAX",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Extracts the largest value from the list of numeric expressions.",
        insertText: new vscode.SnippetString('MAX(${1:x1}, ${2:x2})')
    },
    {
        label: "MID$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "MID$ specifies part of **source** string which can be used either as "+
        "the destination of an assignment (MID$ as a command) or as an argument in "+
        "a string expression (MID$ as a Function). The **start** specifies the position "+
        "of the first character of the sub-string. The **chars** specifies the length of "+
        "the sub-string to be returned. If omitted, this extends to the end of the **source**.",
        insertText: new vscode.SnippetString('MID$(${1:source}, ${2:start}, ${3:chars})')
    },
    {
        label: "PEEK",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Examine the contents of a memory location specified in the <address> "+
        "which should be in the range &0000 to &FFFF (0 to 65535). In all cases "+
        "PEEK will return the value at the RAM address specified (not the ROM), "+
        "and will be in the range &00 to &FF (0 to 255).",
        insertText: new vscode.SnippetString('PEEK(${1:address})')
    },
    {
        label: "PI",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "The value of the ratio between the circumference and the diameter of a circle. "+
        "It is used extensively in graphics routines such as the one listed above.",
        insertText: new vscode.SnippetString('PI')
    },
    {
        label: "POS",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Reports the current horizontal POSition of the text cursor relative to "+
        "the leftedge of the text window. The <stream expression> MUST be specified, "+
        "and does NOT default to #0.",
        insertText: new vscode.SnippetString('POS(#${1:stream})')
    },
    {
        label: "REMAIN",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Returns the REMAINing count from the delay timer specified in **timer** "+
        "(in the range 0 to 3) and disable it.",
        insertText: new vscode.SnippetString('REMAIN ${1:timer}')
    },
    {
        label: "RIGHT$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Extracts the number of characters specified by **chars** from "+
        "the right of the **source** string. If the string is shorter than the required length, "+
        "the whole <str expression> is returned.", 
        insertText: new vscode.SnippetString('RIGHT$(${1:source}, ${2:chars})')
    },
    {
        label: "RND",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Fetches a random number, which may be the next in sequence, a repeat of "+
        "the last one, or the first in a new sequence.",
        insertText: new vscode.SnippetString('RND')
    },
    {
        label: "ROUND",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Rounds **x** to a number of decimal places or power of ten "+
        "specified in **digits**.",
        insertText: new vscode.SnippetString('ROUND(${1:x}, ${2:digits})')
    },
    {
        label: "SIN",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "SQ",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "The SQ function is used to check the number of free entries in the queue for "+
        "a given **channel**, where channel A is 1, B is 2, and C is 4.",
        insertText: new vscode.SnippetString('SQ(${1:channel})')
    },
    {
        label: "SQR",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Returns the square root of **x**.",
        insertText: new vscode.SnippetString('SQR(${1:x})')
    },
    {
        label: "STR$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "STRING$",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "SGN",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "Determines the sign of the <numeric expression>. Returns -1 if "+
        "<numeric expression> is less than 0. Returns 0 if <numeric expression> "+
        "equal 0. Returns 1 if <numeric expression> is greater than zero.",
        insertText: new vscode.SnippetString('SGN(${1:x})')
    },
    {
        label: "TAN",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "TEST",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "TESTR",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "TIME",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "UPPER",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "VAL",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "XPOS",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "",
        insertText: new vscode.SnippetString('')
    },
    {
        label: "YPOS",
        kind: vscode.CompletionItemKind.Function,
        detail: "Locomotive BASIC Function",
        documentation: "",
        insertText: new vscode.SnippetString('')
    }
]