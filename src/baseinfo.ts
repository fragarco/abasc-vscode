import * as vscode from 'vscode';
import { AbascCompletionInfo } from './abasccompletioninfo';

export const BaseInfo: AbascCompletionInfo[] = [
    {
        label: "scrInitialize",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "SUB scrInitialize",
        documentation: new vscode.MarkdownString("Equivalent to calling the firmware routine SCR INITIALIZE"),
        insertText: new vscode.SnippetString('scrInitialize')
    },  
    {
        label: "scrDotPos",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "FUNCTION scrDotPos(<x coord>, <y coord>)",
        documentation: new vscode.MarkdownString(
            "Return the memory address that matches the screen coordinate **x**, **y**. "+
            "The range for **x** depends on the screen video mode: 0 (0-159), 1 (0-319), "+
            "2 (0-639). **y** range always is 0-199."),
        insertText: new vscode.SnippetString('scrDotPos(${1:x}, ${2:y})')
    },
    {
        label: "scrPrevByte",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "FUNCTION scrPrevByte(<address expression>)",
        documentation: new vscode.MarkdownString("Return the address to the previous video memory byte."),
        insertText: new vscode.SnippetString('scrPrevByte(${1:vaddr})')
    },
    {
        label: "scrNextByte",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "FUNCTION scrNextByte(<address expression>)",
        documentation: new vscode.MarkdownString("Return the address to the next video memory byte."),
        insertText: new vscode.SnippetString('scrNextByte(${1:vaddr})')
    },
    {
        label: "scrNextLine",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "FUNCTION scrNextLine(<address expression>)",
        documentation: new vscode.MarkdownString("Return the address to the next video memory line."),
        insertText: new vscode.SnippetString('scrNextLine(${1:vaddr})')
    },
    {
        label: "scrPrevLine",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "FUNCTION scrPrevLine(<address expression>)",
        documentation: new vscode.MarkdownString("Return the address to the previous video memory line."),
        insertText: new vscode.SnippetString('scrPrevLine(${1:vaddr})')
    },
    {
        label: "scrDrawSprite",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "SUB scrDrawSprite(<x byte>, <y line>)",
        documentation: new vscode.MarkdownString(
            "Draws a sprite using the firmware. The data must start with two bytes "+
            "setting the width in bytes and the height in lines (DATA &HHWW). The data "+
            "to use must be added using DATA commands and the sprite to draw must be selected "+
            "with RESTORE just before the call to scrDrawSprite. The range for **x** is 0-79 "+
            "and 0-199 for **y**."),
        insertText: new vscode.SnippetString("scrDrawSprite(${1:xbyte}, ${2:yline})")
    },
    {
        label: "scrDrawSpriteXOR",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "SUB scrDrawSpriteXOR(<x byte>, <y line>)",
        documentation: new vscode.MarkdownString(
            "Draws a sprite using the firmware. The data must start with two bytes "+
            "setting the width in bytes) and the height in lines (DATA &HHWW). The data to use "+
            "must be added using DATA commands and the sprite to draw must be selected with "+
            "RESTORE just before the call to scrDrawSpriteXOR. The range for **x** is 0-79 "+
            "and 0-199 for **y**."),
        insertText: new vscode.SnippetString("scrDrawSpriteXOR(${1:xbyte}, ${2:yline})")
    },
        {
        label: "scrDrawSpriteClipped",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "SUB scrDrawSpriteClipped(<x byte>, <y line>)",
        documentation: new vscode.MarkdownString(
            "Draws a sprite using the firmware. The data must start with two bytes "+
            "setting the width in bytes and the height in lines (DATA &HHWW). The data "+
            "to use must be added using DATA commands and the sprite to draw must be selected "+
            "with RESTORE just before the call to scrDrawSprite. The range for **x** is 0-79 "+
            "and 0-199 for **y**. The sprite image is clipped according the to the view area set" +
            "by scrSetClippingView"),
        insertText: new vscode.SnippetString("scrDrawSpriteClipped(${1:xbyte}, ${2:yline})")
    },
    {
        label: "scrDrawSpriteClippedXOR",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "SUB scrDrawSpriteClippedXOR(<x byte>, <y line>)",
        documentation: new vscode.MarkdownString(
            "Draws a sprite using the firmware. The data must start with two bytes "+
            "setting the width in bytes) and the height in lines (DATA &HHWW). The data to use "+
            "must be added using DATA commands and the sprite to draw must be selected with "+
            "RESTORE just before the call to scrDrawSpriteXOR. The range for **x** is 0-79 "+
            "and 0-199 for **y**. The sprite image is clipped according to the view area set " +
            "by scrSetClippingView"),
        insertText: new vscode.SnippetString("scrDrawSpriteClippedXOR(${1:xbyte}, ${2:yline})")
    },
    {
        label: "scrSetClippingView",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "SUB scrSetClippingView(<x0 byte>, <y0 line>, <x1 byte>, <y1 line>)",
        documentation: new vscode.MarkdownString(
            "Sets the clipping view area for scrDrawSpriteClipped and scrDrawSpriteClippendXOR routines."),
        insertText: new vscode.SnippetString("scrSetClippingView(${1:xbyte0}, ${2:yline0}, ${3:xbyte1}, ${4:yline1})")
    },
    {
        label: "scrPeekColor",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "FUNCTION scrPeekColor(<x coord>, <y coord>)",
        documentation: new vscode.MarkdownString(
            "Return the current ink for the screen **x**, **y** coordinates. These coordinates "+
            "are independent from the video mode, and thus, the range is 0-0 to 639-399."),
        insertText: new vscode.SnippetString("scrPeekColor(${1:x}, ${2:y})")
    },
    {
        label: "scrByteToX",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "FUNCTION scrByteToX(<x byte>)",
        documentation: new vscode.MarkdownString(
            "Returns the related x graphic coordinate in the 0-639 range."),
        insertText: new vscode.SnippetString("scrByteToX(${1:xbyte})")
    },
    {
        label: "scrXToByte",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "FUNCTION scrXToByte(<x>)",
        documentation: new vscode.MarkdownString(
            "Returns the related x sprite coordinate in the 0-79 range."),
        insertText: new vscode.SnippetString("scrXToByte(${1:x})")
    },
    {
        label: "scrLineToY",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "FUNCTION scrLineToY(<y line>)",
        documentation: new vscode.MarkdownString(
            "Returns the related y graphic coordinate in the 0-399 range."),
        insertText: new vscode.SnippetString("scrLineToY(${1:yline})")
    },
    {
        label: "scrYToLine",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "FUNCTION scrYToLine(<y>)",
        documentation: new vscode.MarkdownString(
            "Returns the related y sprite coordinate in the 0-199 range."),
        insertText: new vscode.SnippetString("scrYToLine(${1:y})")
    },
    {
        label: "scrInitDoubleBuffer",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "SUB scrInitDoubleBuffer",
        documentation: new vscode.MarkdownString(
            "Initializes the use of the double-buffer. The double-buffer starts at address "+
            "0x4000. Therefore the program must be compiled using the flag --data=0x8000."
        ),
        insertText: new vscode.SnippetString("scrInitDoubleBuffer")
    },
    {
        label: "scrSwapDoubleBuffer",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "SUB scrSwapDoubleBuffer",
        documentation: new vscode.MarkdownString(
            "Circles the current video memory start address between &C000 and &4000."),
        insertText: new vscode.SnippetString("scrSwapDoubleBuffer")
    },
    {
        label: "scrSetLocation",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "SUB scrSetLocation(<address expr>)",
        documentation: new vscode.MarkdownString(
            "Sets the video memory start address. Only &C000 and &4000 are valid."),
        insertText: new vscode.SnippetString("scrSetLocation(${1:memaddr})")
    },
    {
        label: "scrGetLocation",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "FUNCTION scrGetLocation",
        documentation: new vscode.MarkdownString("Returns the current video memory start address."),
        insertText: new vscode.SnippetString("scrGetLocation()")
    },
    {
        label: "scrSetOffset",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "SUB scrSetOffset(<int expr>)",
        documentation: new vscode.MarkdownString("Sets the screen video memory offset."),
        insertText: new vscode.SnippetString("scrSetOffset(${1:offset})")
    },
    {
        label: "scrGetOffset",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "FUNCTION scrGetOffset",
        documentation: new vscode.MarkdownString("Returns the current screen video memory offset."),
        insertText: new vscode.SnippetString("scrGetOffset()")
    },
    {
        label: "scrSetVideoLocation",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "SUB scrSetVideoLocation(<address expr>, <int expr>)",
        documentation: new vscode.MarkdownString(
            "Sets the video memory start **address** (&C000 or &4000) and its **offset**."),
        insertText: new vscode.SnippetString("scrSetVideoLocation(${1:address}, ${2:offset})")
    },
    {
        label: "scrScrollUp",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "SUB scrScrollUp",
        documentation: new vscode.MarkdownString("Hardware scroll using the firmware routines."),
        insertText: new vscode.SnippetString("scrScrollUp")
    },
    {
        label: "scrScrollDown",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "SUB scrScrollDown",
        documentation: new vscode.MarkdownString("Hardware scroll using the firmware routines."),
        insertText: new vscode.SnippetString("scrScrollDown")
    },
    {
        label: "scrCheckPointRect",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "FUNCTION scrCheckPointRect(<pointX>,<pointY>,<recX>,<recY>,<recW>,<recH>)",
        documentation: new vscode.MarkdownString(
            "Returns -1 (True) if the point is inside the rectangle or 0 (False) if it's outside."),
        insertText: new vscode.SnippetString("scrCheckPointRect(${1:pointx},${2:pointy},${3:recx},${4:recy},${5:recw},${6:rech})")
    },
    {
        label: "scrCheckRectRect",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "FUNCTION scrCheckRectRect(<x1>,<y1>,<w1>,<h1>,<x2>,<y2>,<w2>,<h2>)",
        documentation: new vscode.MarkdownString("Returns if two rectangles collide (-1 TRUE, 0 FALSE)."),
        insertText: new vscode.SnippetString("scrCheckRectRect(${1:x1}, ${2:y1}, ${3:w1}, ${4:h1}, ${5:x2}, ${6:y2}, ${7:w2}, ${8:h2})")
    },
    {
        label: "scrFillBox",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "SUB scrFillBox(<x1>,<y1>,<x2>,<y2>,<pen>)",
        documentation: new vscode.MarkdownString(
            "Draws a filled box. Coordinates are independent from the video mode "+
            "and thus the range goes from 0,0 to 639,399."),
        insertText: new vscode.SnippetString('scrFillBox(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:npen})'),
    },
    {
        label: "scrDrawBox",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "SUB scrDrawBox(<x1>,<y1>,<x2>,<y2>)",
        documentation: new vscode.MarkdownString(
            "Draws a wireframed box. Coodinates are independent from the video mode "+
            "and thus the range goes from 0,0 to 639,399."),
        insertText: new vscode.SnippetString('scrDrawBox(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})'),
    },
    {
        label: "scrDrawTriangle",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "SUB scrDrawTriangle(<x1>,<y1>,<x2>,<y2>,<x3>,<y3>)",
        documentation: new vscode.MarkdownString(
            "Draws a wireframed triangle. Coodinates are independent from the video mode "+
            "and thus the range goes from 0,0 to 639,399."),
        insertText: new vscode.SnippetString('scrDrawTriangle(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3})'),
    },
    {
        label: "scrDrawPolygon",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/screen.bas",
        signature: "SUB scrDrawPolygon(<x1>,<y1>,<x2>,<y2>,<x3>,<y3>,<x4>,<y4>)",
        documentation: new vscode.MarkdownString(
            "Draws a wireframed polygon. Coodinates are independent from the video mode "+
            "and thus the range goes from 0,0 to 639,399."),
        insertText: new vscode.SnippetString('scrDrawPolygon(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3}, ${7:x4}, ${8:y4})'),
    },
    {
        label: "byteCompose",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/byte.bas",
        signature: "FUNCTION byteCompose(<int expr>, <int expr>)",
        documentation: new vscode.MarkdownString(
            "Returns a 16 bits integer mixing lower **b0** and upper **b1** bytes."),
        insertText: new vscode.SnippetString('byteCompose(${1:b0}, ${2:b1})'),
    },
    {
        label: "byte0",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/byte.bas",
        signature: "FUNCTION byte0(<int expre>)",
        documentation: new vscode.MarkdownString(
            "Returns the **x** lower byte value."),
        insertText: new vscode.SnippetString('byte0(${1:x})'),
    },
    {
        label: "byte1",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/byte.bas",
        signature: "FUNCTION byte1(<int expr>)",
        documentation: new vscode.MarkdownString(
            "Returns the **x** upper byte value."),
        insertText: new vscode.SnippetString('byte1(${1:x})'),
    },
    {
        label: "byteSet0",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/byte.bas",
        signature: "FUNCTION byteSet0(<int expr>,<int expr>)",
        documentation: new vscode.MarkdownString(
            "Return the resulting integer of replacing the lower byte of **x** with "+
            "the lower byte of **b**."),
        insertText: new vscode.SnippetString('byteSet0(${1:x}, ${2:b})'),
    },
    {
        label: "byteSet1",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/byte.bas",
        signature: "FUNCTION byteSet1(<int expr>,<int expr>)",
        documentation: new vscode.MarkdownString(
            "Return the resulting integer of replacing the upper byte of **x** with "+
            "the upper byte of **b**."),
        insertText: new vscode.SnippetString('byteSet1(${1:x}, ${2:b})'),
    },
    {
        label: "memCopy",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/memory.bas",
        signature: "SUB memCopy(<address expr>,<address expr>,<int expr>)",
        documentation: new vscode.MarkdownString(
            "Copy **nbytes** from **source** address into **dest** address."),
        insertText: new vscode.SnippetString('memCopy(${1:dest},${2:src},${3:nbytes})'),
    },
    {
        label: "memSet",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/memory.bas",
        signature: "SUB memSet(<address expr>,<int expr>,<int expr>)",
        documentation: new vscode.MarkdownString(
            "Fill with **b** value **nbytes** of memory from address **dest**"),
        insertText: new vscode.SnippetString('memSet(${1:dest},${2:nbytes},${3:b})'),
    },
    {
        label: "strLPad$",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/string.bas",
        signature: "FUNCTION strLPad$(<string>,<int expr>, <char expr>)",
        documentation: new vscode.MarkdownString(
            "Return a new string padded in the left with **padch** until total length is *totaln*."),
        insertText: new vscode.SnippetString('strLPad$(${1:src},${2:totaln},${3:padch})'),
    },
    {
        label: "strRPad$",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/string.bas",
        signature: "FUNCTION strRPad$(<string>,<int expr>,<char expr>)",
        documentation: new vscode.MarkdownString(
            "Return a new string padded in the right with **padch** until total length is *totaln*."),
        insertText: new vscode.SnippetString('strRPad$(${1:src}, ${2:totaln}, ${3:padch})'),
    },
    {
        label: "strAppend",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/string.bas",
        signature: "SUB strAppend(<string>, <str expr>)",
        documentation: new vscode.MarkdownString("Append **src** string at the end of **dest** string."),
        insertText: new vscode.SnippetString('strAppend(${1:dest}, ${2:src})'),
    },
    {
        label: "strCopy",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/string.bas",
        signature: "SUB strCopy(<string>,<str expr>)",
        documentation: new vscode.MarkdownString("Copy **src** string expression into **dest** string."),
        insertText: new vscode.SnippetString('strCopy(${1:dest}, ${2:src})'),
    },
    {
        label: "strClear",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/string.bas",
        signature: "SUB strClear(<string>)",
        documentation: new vscode.MarkdownString("Set **src** string length to 0."),
        insertText: new vscode.SnippetString('strClear(${1:src})'),
    },
    {
        label: "txtReadAsc",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/text.bas",
        signature: "FUNCTION txtReadAsc(<x coord>,<y coord>)",
        documentation: new vscode.MarkdownString(
            "Returns the ASCII code for the character in the text screen position **x**,**y**."),
        insertText: new vscode.SnippetString('txtReadAsc(${1:x}, ${2:y})'),
    },
    {
        label: "txtRotateLeft",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/text.bas",
        signature: "SUB txtRotateLeft(<str expr>,<x coord>,<y coord>)",
        documentation: new vscode.MarkdownString(
            "Draws the **src** string expression starting at screen position **x**, **y** "+
            "rotated 90 degrees to the left."),
        insertText: new vscode.SnippetString('txtRotateLeft(${1:src}, ${2:x}, ${3:y})'),
    },
    {
        label: "txtRotateRight",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/text.bas",
        signature: "SUB txtRotateRight(<str expr>,<x coord>,<y coord>)",
        documentation: new vscode.MarkdownString(
            "Draws the **src** string expression starting at screen position **x**, **y** "+
            "rotated 90 degrees to the right."),
        insertText: new vscode.SnippetString('txtRotateRight(${1:src}, ${2:x}, ${3:y})'),
    },
    {
        label: "txtPrintBig",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/text.bas",
        signature: "SUB txtPrintBig(<str expr>,<x coord>,<y coord>,<pen1>,<pen2>)",
        documentation: new vscode.MarkdownString(
            "Draws the string expression at double size in screen position **x**, **y**. "+
            "upper part uses colour **pen1** while lower part uses **pen2**."),
        insertText: new vscode.SnippetString('txtPrintBig(${1:src}, ${2:x}, ${3:y}, ${4:pen1}, ${5:pen2})'),
    },
    {
        label: "shiftLeft",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/math.bas",
        signature: "FUNCTION shiftLeft(<int expr>)",
        documentation: new vscode.MarkdownString("Returns ```x << 1```."),
        insertText: new vscode.SnippetString('shiftLeft(${1:x})'),
    },
    {
        label: "shiftLeft2",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/math.bas",
        signature: "FUNCTION shiftLeft2(<int expr>)",
        documentation: new vscode.MarkdownString("Returns ```x << 2```."),
        insertText: new vscode.SnippetString('shiftLeft2(${1:x})'),
    },
    {
        label: "shiftLeftN",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/math.bas",
        signature: "FUNCTION shiftLeftN(<int expr>,<int expr>)",
        documentation: new vscode.MarkdownString("Returns ```x << n```."),
        insertText: new vscode.SnippetString('shiftLeftN(${1:x}, ${2:n})'),
    },
    {
        label: "shiftLeft8",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/math.bas",
        signature: "FUNCTION shiftLeft8(<int expr>)",
        documentation: new vscode.MarkdownString("Returns ```x << 8```."),
        insertText: new vscode.SnippetString('shiftLeft8(${1:x})'),
    },
    {
        label: "shiftRight",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/math.bas",
        signature: "FUNCTION shiftRight(<int expr>)",
        documentation: new vscode.MarkdownString("Returns ```x >> 1```."),
        insertText: new vscode.SnippetString('shiftRight(${1:x})'),
    },
    {
        label: "shiftRight2",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/math.bas",
        signature: "FUNCTION shiftRight2(<int expr>)",
        documentation: new vscode.MarkdownString("Returns ```x >> 2```."),
        insertText: new vscode.SnippetString('shiftRight2(${1:x})'),
    },
    {
        label: "shiftRightN",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/math.bas",
        signature: "FUNCTION shiftRightN(<int expr>,<int expr>)",
        documentation: new vscode.MarkdownString("Returns ```x >> n```."),
        insertText: new vscode.SnippetString('shiftRightN(${1:x}, ${2:n})'),
    },
    {
        label: "shiftRight8",
        kind: vscode.CompletionItemKind.Function,
        detail: "base/math.bas",
        signature: "FUNCTION shiftRight8(<int expr>)",
        documentation: new vscode.MarkdownString("Returns ```x >> 8```."),
        insertText: new vscode.SnippetString('shiftRight8(${1:x})'),
    }
]
