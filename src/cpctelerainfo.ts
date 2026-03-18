import * as vscode from 'vscode';
import { AbascCompletionInfo } from './abasccompletioninfo';

export const CPCTeleraInfo: AbascCompletionInfo[] = [
    {
        label: "cpctakpMusicInit",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/audio.bas",
        signature: "SUB cpctakpMusicInit(songdata)",
        documentation: new vscode.MarkdownString(
            "Sets up a music into Arkos Tracker Player to be played later on with cpctakpMusicPlay."),
        insertText: new vscode.SnippetString("cpctakpMusicInit(${1:dataaddr})"),
    },
    {
        label: "cpctakpMusicPlay",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/audio.bas",
        signature: "SUB cpctakpMusicPlay",
        documentation: new vscode.MarkdownString(
            "Plays next music cycle of the present song with Arkos Tracker Player."),
        insertText: new vscode.SnippetString("cpctakpMusicPlay"),
    },
    {
        label: "cpctakpSetFadeVolume",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/audio.bas",
        signature: "SUB cpctakpSetFadeVolume(fadelevel)",
        documentation: new vscode.MarkdownString(
            "Sets global volumes for creating fade in / out effects."),
        insertText: new vscode.SnippetString("cpctakpSetFadeVolume(${1:fadelevel})"),
    },
    {
        label: "cpctakpSFXGetInstrument",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/audio.bas",
        signature: "FUNCTION cpctakpSFXGetInstrument(channel)",
        documentation: new vscode.MarkdownString(
            "Returns the number of the instrument which is playing SFX in the selected channel (0 = Channel free / not playing SFX)."),
        insertText: new vscode.SnippetString("cpctakpSFXGetInstrument(${1:channel})"),
    },
    {
        label: "cpctakpSFXInit",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/audio.bas",
        signature: "SUB cpctakpSFXInit(songdata)",
        documentation: new vscode.MarkdownString(
            "Initializes sound effect instruments to be able to play sound effects."),
        insertText: new vscode.SnippetString("cpctakpSFXInit(${1:dataaddr})"),
    },
    {
        label: "cpctakpSFXPlay",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/audio.bas",
        signature: "SUB cpctakpSFXPlay(sfxnum, vol, note, nspeed, invertedpitch, channelbitmask)",
        documentation: new vscode.MarkdownString(
            'Plays a concrete sound effect, using the instruments of the "SFX song" given to cpctakpSFXInit '+
            "when initializing sound effects."),
        insertText: new vscode.SnippetString("cpctakpSFXPlay(${1:sfxnum}, ${2:vol}, ${3:note}, ${4:nspeed}, ${5:invpitch}, ${6:chbitmask})"),
    },
    {
        label: "cpctakpSFXStop",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/audio.bas",
        signature: "SUB cpctakpSFXStop(chbitmask)",
        documentation: new vscode.MarkdownString(
            "Stops the reproduction sound FX on given channels."),
        insertText: new vscode.SnippetString("cpctakpSFXStop(${1:chbitmask})"),
    },
    {
        label: "cpctakpSFXStopAll",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/audio.bas",
        signature: "SUB cpctakpSFXStopAll",
        documentation: new vscode.MarkdownString(
            "Stops the reproduction of any sound effect in the 3 channels."),
        insertText: new vscode.SnippetString("cpctakpSFXStopAll"),
    },
    {
        label: "cpctakpSongLoopTimes",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/audio.bas",
        signature: "FUNCTION cpctakpSongLoopTimes",
        documentation: new vscode.MarkdownString(
            "Returns the number of times that the current playing song has looped (0-255)."),
        insertText: new vscode.SnippetString("cpctakpSongLoopTimes"),
    },
    {
        label: "cpctakpStop",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/audio.bas",
        signature: "SUB cpctakpStop",
        documentation: new vscode.MarkdownString(
            "Stops playing musing and sound effects on all 3 channels."),
        insertText: new vscode.SnippetString("cpctakpStop"),
    },
    {
        label: "cpctGetBit",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/bitarray.bas",
        signature: "FUNCTION cpctGetBit(array$, index)",
        documentation: new vscode.MarkdownString(
            "Retrieves a single bit from a byte array in the form of a string."),
        insertText: new vscode.SnippetString("cpctGetBit(${1:string}, ${2:index})"),
    },
    {
        label: "cpctGet2Bits",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/bitarray.bas",
        signature: "FUNCTION cpctGet2Bits(array$, index)",
        documentation: new vscode.MarkdownString(
            "Retrieves two consecutive bits from a byte array in the form of a string."),
        insertText: new vscode.SnippetString("cpctGet2Bits(${1:string}, ${2:index})"),
    },
    {
        label: "cpctGet4Bits",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/bitarray.bas",
        signature: "FUNCTION cpctGet4Bits(array$, index)",
        documentation: new vscode.MarkdownString(
            "Retrieves four consecutive bits from a byte array in the form of a string."),
        insertText: new vscode.SnippetString("cpctGet4Bits(${1:string}, ${2:index})"),
    },
    {
        label: "cpctGet6Bits",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/bitarray.bas",
        signature: "FUNCTION cpctGet6Bits(array$, index)",
        documentation: new vscode.MarkdownString(
            "Retrieves six consecutive bits from a byte array in the form of a string."),
        insertText: new vscode.SnippetString("cpctGet6Bits(${1:string}, ${2:index})"),
    },
    {
        label: "cpctSetBit",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/bitarray.bas",
        signature: "SUB cpctSetBit(array$, value, index)",
        documentation: new vscode.MarkdownString(
            "Sets one bit from the byte array stored as a string."),
        insertText: new vscode.SnippetString("cpctSetBit(${1:string}, ${2:value}, ${3:index})"),
    },
    {
        label: "cpctSet2Bits",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/bitarray.bas",
        signature: "SUB cpctSet2Bits(array$, value, index)",
        documentation: new vscode.MarkdownString(
            "Sets two bits from the byte array stored as a string."),
        insertText: new vscode.SnippetString("cpctSet2Bits(${1:string}, ${2:value}, ${3:index})"),
    },
    {
        label: "cpctSet4Bits",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/bitarray.bas",
        signature: "SUB cpctSet4Bits(array$, value, index)",
        documentation: new vscode.MarkdownString(
            "Sets four bits from the byte array stored as a string."),
        insertText: new vscode.SnippetString("cpctSet4Bits(${1:string}, ${2:value}, ${3:index})"),
    },
    {
        label: "cpctSet6Bits",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/bitarray.bas",
        signature: "SUB cpctSet6Bits(array$, value, index)",
        documentation: new vscode.MarkdownString(
            "Sets six bits from the byte array stored as a string."),
        insertText: new vscode.SnippetString("cpctSet6Bits(${1:string}, ${2:value}, ${3:index})"),
    },
    {
        label: "cpctetmDrawTileBox2x4",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/easytilemaps.bas",
        signature: "SUB cpctetmDrawTileBox2x4(x, y, w, h, mapw, videomem, timemap)",
        documentation: new vscode.MarkdownString(
            "Draws (or redraws) a determined rectangle of tiles inside a tilemap.  It is mainly used to restore parts of a tilemap."),
        insertText: new vscode.SnippetString("cpctetmDrawTileBox2x4(${1:x}, ${2:y}, ${3:w}, ${4:h}, ${5:mapw}, ${6:videomem}, ${7:timemap})"),
    },
    {
        label: "cpctetmDrawTilemap2x4f",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/easytilemaps.bas",
        signature: "SUB cpctetmDrawTilemap2x4f(vieww, viewh, vmem, tiles)",
        documentation: new vscode.MarkdownString(
            "Draws a complete tilemap made of 2x4-bytes tiles (Fast version)."),
        insertText: new vscode.SnippetString("cpctetmDrawTilemap2x4f(${1:vieww}, ${2:viewh}, ${3:vmem}, ${4:tiles})"),
    },
    {
        label: "cpctetmDrawTilemap4x8ag",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/easytilemaps.bas",
        signature: "SUB cpctetmDrawTilemap4x8ag(memaddress, tileids)",
        documentation: new vscode.MarkdownString(
            "Draws an aligned view of a tilemap made of 4x8-bytes tiles. Tiles must be "+
            "codified as zig-zagged rows (left-to-right, then right-to-left) and with "+
            "scanlines in Gray-code order 0,1,3,2,6,7,5,4 (zgtiles format)."),
        insertText: new vscode.SnippetString("cpctetmDrawTilemap4x8ag(${1:memaddress}, ${2:tileids})"),
    },
    {
        label: "cpctetmDrawTilemap4x8agf",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/easytilemaps.bas",
        signature: "SUB cpctetmDrawTilemap4x8agf(memaddress, tileids)",
        documentation: new vscode.MarkdownString(
            "Draws an aligned view of a tilemap made of 4x8-bytes tiles. Tiles must be Gray-coded, "+
            "with scanline order 0,1,3,2,6,7,5,4. It works identical to cpctetmDrawTilemap4x8ag "+
            "but faster depending on horizontal repetitions of tiles."),
        insertText: new vscode.SnippetString("cpctetmDrawTilemap4x8agf(${1:memaddress}, ${2:tileids})"),
    },
    {
        label: "cpctetmDrawTileRow2x4",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/easytilemaps.bas",
        signature: "SUB cpctetmDrawTileRow2x4(ntiles, pvideomem, ptmrow)",
        documentation: new vscode.MarkdownString(
            "Draws a given number of consecutive 2x4-bytes tiles of a tilemap as a row."),
        insertText: new vscode.SnippetString("cpctetmDrawTileRow2x4(${1:ntiles}, ${2:pvideomem}, ${3:ptmrow})"),
    },
    {
        label: "cpctetmSetTileset2x4",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/easytilemaps.bas",
        signature: "SUB cpctetmSetTileset2x4(tileset)",
        documentation: new vscode.MarkdownString(
            "Sets an internal pointer to the tileset that will be used when drawing tilemaps with "+
            "etm-2x4 functions."),
        insertText: new vscode.SnippetString("cpctetmSetTileset2x4(${1:tileset})"),
    },
    {
        label: "cpctetmSetDrawTilemap4x8ag",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/easytilemaps.bas",
        signature: "SUB cpctetmSetDrawTilemap4x8ag(vieww, viewh, tilemapw, tiles)",
        documentation: new vscode.MarkdownString(
            "Sets internal configuration values for cpctetmDrawTilemap4x8ag."),
        insertText: new vscode.SnippetString("cpctetmSetDrawTilemap4x8ag(${1:vieww}, ${2:viewh}, ${3:tilemapw}, ${4:tiles})"),
    },
    {
        label: "cpctetmSetDrawTilemap4x8agf",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/easytilemaps.bas",
        signature: "SUB cpctetmSetDrawTilemap4x8agf(vieww, viewh, tilemapw, tiles)",
        documentation: new vscode.MarkdownString(
            "Sets internal configuration values for cpctetmDrawTilemap4x8agf."),
        insertText: new vscode.SnippetString("cpctetmSetDrawTilemap4x8agf(${1:vieww}, ${2:viewh}, ${3:tilemapw}, ${4:tiles})"),
    },
    {
        label: "cpctDisableFirmware",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/firmware.bas",
        signature: "FUNCTION cpctDisableFirmware",
        documentation: new vscode.MarkdownString(
            "Disables Amstrad CPC firmware, preventing it from being executed at every CPU interrupt."),
        insertText: new vscode.SnippetString("cpctDisableFirmware"),
    },
    {
        label: "cpctDisableLowerROM",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/firmware.bas",
        signature: "SUB cpctDisableLowerROM",
        documentation: new vscode.MarkdownString(
            "Disables Lower ROM [0x0000 - 0x3FFF]"),
        insertText: new vscode.SnippetString("cpctDisableLowerROM"),
    },
    {
        label: "cpctDisableUpperROM",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/firmware.bas",
        signature: "SUB cpctDisableUpperROM",
        documentation: new vscode.MarkdownString(
            "Disables Upper ROM [0xC000 - 0xFFFF]"),
        insertText: new vscode.SnippetString("cpctDisableUpperROM"),
    },
    {
        label: "cpctEnableLowerROM",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/firmware.bas",
        signature: "SUB cpctEnableLowerROM",
        documentation: new vscode.MarkdownString(
            "Enables Upper ROM [0x000 - 0x3FFF]"),
        insertText: new vscode.SnippetString("cpctEnableLowerROM"),
    },
    {
        label: "cpctEnableUpperROM",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/firmware.bas",
        signature: "SUB cpctEnableUpperROM",
        documentation: new vscode.MarkdownString(
            "Enables Upper ROM [0xC000 - 0xFFFF]"),
        insertText: new vscode.SnippetString("cpctEnableUpperROM"),
    },
    {
        label: "cpctReenableFirmware",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/firmware.bas",
        signature: "SUB cpctReenableFirmware",
        documentation: new vscode.MarkdownString(
            "Re-enables previously disabled Amstrad CPC firmware."),
        insertText: new vscode.SnippetString("cpctReenableFirmware"),
    },
    {
        label: "cpctRemoveInterruptHandler",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/firmware.bas",
        signature: "FUNCTION cpctRemoveInterruptHandler",
        documentation: new vscode.MarkdownString(
            "Sets nothing as interrupt handler (returns every time it is called)."),
        insertText: new vscode.SnippetString("cpctRemoveInterruptHandler"),
    },
    {
        label: "cpctSetInterruptHandler",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/firmware.bas",
        signature: "SUB cpctSetInterruptHandler(cbaddress)",
        documentation: new vscode.MarkdownString(
            "Sets a user provided function as new interrupt handler."),
        insertText: new vscode.SnippetString("cpctSetInterruptHandler(${1:cbaddress})"),
    },
    {
        label: "cpctGetKeypressedAsASCII",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/keyboard.bas",
        signature: "FUNCTION cpctGetKeypressedAsASCII",
        documentation: new vscode.MarkdownString(
            "Assuming there is only one Key currently pressed, it returns the ASCII value "+
            "associated to the pressed key. Returns 0 if no key is currently pressed."),
        insertText: new vscode.SnippetString("cpctGetKeypressedAsASCII"),
    },
    {
        label: "cpctIsAnyKeyPressed",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/keyboard.bas",
        signature: "FUNCTION cpctIsAnyKeyPressed",
        documentation: new vscode.MarkdownString(
            "Checks if there is at least one key pressed. cpctScanKeyboard routines must "+
            "be used before calling this function."),
        insertText: new vscode.SnippetString("cpctIsAnyKeyPressed"),
    },
    {
        label: "cpctIsAnyKeyPressedf",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/keyboard.bas",
        signature: "FUNCTION cpctIsAnyKeyPressedf",
        documentation: new vscode.MarkdownString(
            "Checks if there is at least one key pressed.  This function does the same "+
            "as cpctIsAnyKeyPressed but ~73% faster. cpctScanKeyboard routines must "+
            "be used before calling this function."),
        insertText: new vscode.SnippetString("cpctIsAnyKeyPressedf"),
    },
    {
        label: "cpctIsKeyPressed",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/keyboard.bas",
        signature: "FUNCTION cpctIsKeyPressed(keyid)",
        documentation: new vscode.MarkdownString(
            "Checks if a concrete key is pressed or not (0 False, <>0 True)."),
        insertText: new vscode.SnippetString("cpctIsKeyPressed(${1:keyid})"),
    },
    {
        label: "cpctScanKeyboard",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/keyboard.bas",
        signature: "SUB cpctScanKeyboard",
        documentation: new vscode.MarkdownString(
            "Reads the status of keyboard and joysticks and stores it in the 10 bytes "+
            "(80 bits) array reserved for this purpose."),
        insertText: new vscode.SnippetString("cpctScanKeyboard"),
    },
    {
        label: "cpctScanKeyboardf",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/keyboard.bas",
        signature: "SUB cpctScanKeyboardf",
        documentation: new vscode.MarkdownString(
            "Reads the status of keyboard and joysticks and stores it in the 10 bytes "+
            "(80 bits) array reserved for this purpose. This version is ~25% faster than regular "+
            "cpctScanKeyboard"),
        insertText: new vscode.SnippetString("cpctScanKeyboardf"),
    },
    {
        label: "cpctScanKeyboardi",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/keyboard.bas",
        signature: "SUB cpctScanKeyboardi",
        documentation: new vscode.MarkdownString(
            "Reads the status of keyboard and joysticks and stores it in the 10 bytes reserved for "+
            "this purpose. This routine doesn't disable or reenable interrupts (Interrupt-Unsafe version)."),
        insertText: new vscode.SnippetString("cpctScanKeyboardi"),
    },
    {
        label: "cpctScanKeyboardif",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/keyboard.bas",
        signature: "SUB cpctScanKeyboardif",
        documentation: new vscode.MarkdownString(
            "Reads the status of keyboard and joysticks and stores it in the 10 bytes reserved for "+
            "this purpose. This routine doesn't disable or reenable interrupts (Interrupt-Unsafe version). "+
            "This version is ~25% faster than regular cpctScanKeyboardi."),
        insertText: new vscode.SnippetString("cpctScanKeyboardif"),
    },
    {
        label: "cpctMemcpy",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/memutils.bas",
        signature: "SUB cpctMemcpy(toptr, fromptr, bytes)",
        documentation: new vscode.MarkdownString(
            "Copies a size bytes from one location to other in memory. This function is an "+
            "specific implementation of standard C memcpy for Z80 machines, and it is fully "+
            "compatible with the standard."),
        insertText: new vscode.SnippetString("cpctMemcpy(${1:toptr}, ${2:fromptr}, ${3:bytes})"),
    },
    {
        label: "cpctMemset",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/memutils.bas",
        signature: "SUB cpctMemset(arrayptr, value, bytes)",
        documentation: new vscode.MarkdownString(
            "Fills up a complete byte-array in memory with a given 8-bit value (as std memset). "+
            "This function works for array sizes from 2 to 65535 (it does not work for 0 or 1)."),
        insertText: new vscode.SnippetString("cpctMemset(${1:arrayptr}, ${2:value}, ${3:bytes})"),
    },
    {
        label: "cpctMemsetf8",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/memutils.bas",
        signature: "SUB cpctMemsetf8(arrayptr, value, bytes)",
        documentation: new vscode.MarkdownString(
            "Fills up a complete array in memory setting bytes 2-by-2, in chuncks of 8 bytes. Size of the array must "+
            "be multiple of 8."),
        insertText: new vscode.SnippetString("cpctMemsetf8(${1:arrayptr}, ${2:value}, ${3:bytes})"),
    },
    {
        label: "cpctMemsetf64",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/memutils.bas",
        signature: "SUB cpctMemsetf64(arrayptr, value, bytes)",
        documentation: new vscode.MarkdownString(
            "Fills up a complete array in memory setting bytes 2-by-2, in chunks of 64 bytes.  Size of the array must "+
            "be multiple of 64."),
        insertText: new vscode.SnippetString("cpctMemsetf64(${1:arrayptr}, ${2:value}, ${3:bytes})"),
    },
    {
        label: "cpctMemsetf64i",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/memutils.bas",
        signature: "SUB cpctMemsetf64i(arrayptr, value, bytes)",
        documentation: new vscode.MarkdownString(
            "Fills up a complete array in memory setting bytes 2-by-2, in chunks of 64 bytes. "+
            "Size of the array must be multiple of 64. Interrupts are disabled at the start of "+
            "each 64-bytes-chunk and reenabled at its end."),
        insertText: new vscode.SnippetString("cpctMemsetf64i(${1:arrayptr}, ${2:value}, ${3:bytes})"),
    },
    {
        label: "cpctPageMemory",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/memutils.bas",
        signature: "SUB cpctPageMemory(bankvalue)",
        documentation: new vscode.MarkdownString(
            "Makes accesible a memory zone from the upper 64Kb on a standard CPC 6128 or from a memory "+
            "extension. Memory layout is defined by the join (OR) of RAM pages constants and memory banks "+
            "contants. Pages represent 16K chunks while Banks are 64K portions."),
        insertText: new vscode.SnippetString("cpctPageMemory(${1:bankvalue})"),
    },
    {
        label: "cpctSetStackLocation",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/memutils.bas",
        signature: "SUB cpctSetStackLocation(addr)",
        documentation: new vscode.MarkdownString(
            "Sets a new location for the program stack in memory."),
        insertText: new vscode.SnippetString("cpctSetStackLocation(${1:addr})"),
    },
    {
        label: "cpctWaitHalts",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/memutils.bas",
        signature: "SUB cpctWaitHalts(halts)",
        documentation: new vscode.MarkdownString(
            "Waits for a given number of halt assembler instructions to be executed (interrupts)."),
        insertText: new vscode.SnippetString("cpctWaitHalts(${1:halts})"),
    },
    {
        label: "cpctSRand",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/random.bas",
        signature: "SUB cpctSRand(seed)",
        documentation: new vscode.MarkdownString(
            "Restores internal index state of Marsaglia’s XORShift 8-bits generator. "+
            "This ensures that next call to cpctRand will produce 32 new random bits."),
        insertText: new vscode.SnippetString("cpctSRand(${1:seed})"),
    },
    {
        label: "cpctRand",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/random.bas",
        signature: "FUNCTION cpctRand",
        documentation: new vscode.MarkdownString(
            "Gets a high-quality 8-bit pseudo-random number using Marsaglia’s XOR-shift "+
            "algorithm (Using a 32-bits state)"),
        insertText: new vscode.SnippetString("${1:cpctRand}"),
    },
    {
        label: "cpctDrawSpriteBlended",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawSpriteBlended(vmem, w, h, sprite)",
        documentation: new vscode.MarkdownString(
            "Draws sprites blending them with current contents of screen video memory. "+
            "It uses XOR by default, but many other blending modes are available."),
        insertText: new vscode.SnippetString("cpctDrawSpriteBlended(${1:vmem}, ${2:w}, ${3:h}, ${4:sprite})"),
    },
    {
        label: "cpctSetBlendMode",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctSetBlendMode(bmode) ASM",
        documentation: new vscode.MarkdownString(
            "Establishes the blending mode that cpct_drawSpriteBlended will use from now on."+
            "The possible values are any of the CPCTBLEND constants."),
        insertText: new vscode.SnippetString("cpctSetBlendMode(${1:bmode})"),
    },
    {
        label: "cpctDrawSpriteColorizeM0",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawSpriteColorizeM0(sprite, vmem, w, h, rplcpat)",
        documentation: new vscode.MarkdownString(
            "Directly replace a color during sprite drawing to video memory. "+
            "Pattern should contain 2 8-bit (16 bit integer) colour pixel patterns."),
        insertText: new vscode.SnippetString("cpctDrawSpriteColorizeM0(${1:sprite}, ${2:vmem}, ${3:w}, ${4:h}, ${5:rplcpat})"),
    },
    {
        label: "cpctDrawSpriteColorizeM1",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawSpriteColorizeM1(sprite, vmem, w, h, rplcpat)",
        documentation: new vscode.MarkdownString(
            "Directly replace a color during sprite drawing to video memory. "+
            "Pattern should contain 2 8-bit (16 bit integer) colour pixel patterns."),
        insertText: new vscode.SnippetString("cpctDrawSpriteColorizeM1(${1:sprite}, ${2:vmem}, ${3:w}, ${4:h}, ${5:rplcpat})"),
    },
    {
        label: "cpctDrawSpriteMaskedAlignedColorizeM0",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawSpriteMaskedAlignedColorizeM0(sprite, vmem, w, h, masktable, rplcpat)",
        documentation: new vscode.MarkdownString(
            "Directly replace a color during sprite drawing to video memory. "+
            "Pattern should contain 2 8-bit (16 bit integer) colour pixel patterns."),
        insertText: new vscode.SnippetString("cpctDrawSpriteMaskedAlignedColorizeM0(${1:sprite}, ${2:vmem}, ${3:w}, ${4:h}, ${5:masktable}, ${6:rplcpat})"),
    },
    {
        label: "cpctDrawSpriteMaskedAlignedColorizeM1",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawSpriteMaskedAlignedColorizeM1(sprite, vmem, w, h, masktable, rplcpat)",
        documentation: new vscode.MarkdownString(
            "Directly replace a color during sprite drawing to video memory. "+
            "Pattern should contain 2 8-bit (16 bit integer) colour pixel patterns."),
        insertText: new vscode.SnippetString("cpctDrawSpriteMaskedAlignedColorizeM1(${1:sprite}, ${2:vmem}, ${3:w}, ${4:h}, ${5:masktable}, ${6:rplcpat})"),
    },
    {
        label: "cpctDrawSpriteMaskedColorizeM0",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawSpriteMaskedColorizeM0(sprite, vmem, w, h, rplcpat)",
        documentation: new vscode.MarkdownString(
            "Directly replace a color during sprite drawing to video memory. "+
            "Pattern should contain 2 8-bit (16 bit integer) colour pixel patterns."),
        insertText: new vscode.SnippetString("cpctDrawSpriteMaskedColorizeM0(${1:sprite}, ${1:vmem}, ${2:w}, ${3:h}, ${4:rplcpat})"),
    },
    {
        label: "cpctDrawSpriteMaskedColorizeM1",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawSpriteMaskedColorizeM1(sprite, vmem, w, h, rplcpat)",
        documentation: new vscode.MarkdownString(
            "Directly replace a color during sprite drawing to video memory. "+
            "Pattern should contain 2 8-bit (16 bit integer) colour pixel patterns."),
        insertText: new vscode.SnippetString("cpctDrawSpriteMaskedColorizeM1(${1:sprite}, ${2:vmem}, ${3:w}, ${4:h}, ${5:rplcpat})"),
    },
    {
        label: "cpctSpriteColorizeM0",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctSpriteColorizeM0(rplcpat, size, sprite)",
        documentation: new vscode.MarkdownString(
            "Replaces a colour pattern (Find Pattern) by a new one (Insert Pattern) in an array/sprite. "+
            "Typical use is to replace pixels of a given PEN Colour (OldPen) into pixels of a new PEN "+
            "Colour (NewPen). Replace Pattern => 1st byte=Pattern to Find, 2nd byte=Pattern to "+
            "insert instead"),
        insertText: new vscode.SnippetString("cpctSpriteColorizeM0(${1:rplcpat}, ${2:size}, ${3:sprite})"),
    },
    {
        label: "cpctSpriteColorizeM1",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctSpriteColorizeM1(rplcpat, size, sprite)",
        documentation: new vscode.MarkdownString(
            "Replaces a colour pattern (Find Pattern) by a new one (Insert Pattern) in an array/sprite. "+
            "Typical use is to replace pixels of a given PEN Colour (OldPen) into pixels of a new PEN "+
            "Colour (NewPen). Replace Pattern => 1st byte=Pattern to Find, 2nd byte=Pattern to "+
            "insert instead"),
        insertText: new vscode.SnippetString("cpctSpriteColorizeM1(${1:rplcpat}, ${2:size}, ${3:sprite})"),
    },
    {
        label: "cpctSpriteMaskedColorizeM0",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctSpriteMaskedColorizeM0(rplcpat, size, sprite)",
        documentation: new vscode.MarkdownString(
            "Replaces a colour pattern (Find Pattern) by a new one (Insert Pattern) in an array/sprite. "+
            "Typical use is to replace pixels of a given PEN Colour (OldPen) into pixels of a new PEN "+
            "Colour (NewPen). Replace Pattern => 1st byte=Pattern to Find, 2nd byte=Pattern to "+
            "insert instead"),
        insertText: new vscode.SnippetString("cpctSpriteMaskedColorizeM0(${1:rplcpat}, ${2:size}, ${3:sprite})"),
    },
    {
        label: "cpctSpriteMaskedColorizeM1",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctSpriteMaskedColorizeM1(rplcpat, size, sprite)",
        documentation: new vscode.MarkdownString(
            "Replaces a colour pattern (Find Pattern) by a new one (Insert Pattern) in an array/sprite. "+
            "Typical use is to replace pixels of a given PEN Colour (OldPen) into pixels of a new PEN "+
            "Colour (NewPen). Replace Pattern => 1st byte=Pattern to Find, 2nd byte=Pattern to "+
            "insert instead"),
        insertText: new vscode.SnippetString("cpctSpriteMaskedColorizeM1(${1:rplcpat}, ${2:size}, ${3:sprite})"),
    },
    {
        label: "cpctDrawTileAligned2x4f",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawTileAligned2x4f(tile, vmem)",
        documentation: new vscode.MarkdownString(
            "Copies a 2x4-byte sprite to video memory (or screen buffer), assuming that location "+
            "to be copied is in Pixel Lines 0-3 of a character line. The destination byte must be "+
            "character aligned."),
        insertText: new vscode.SnippetString("cpctDrawTileAligned2x4f(${1:tile}, ${1:vmem})"),
    },
    {
        label: "cpctDrawTileAligned2x8",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawTileAligned2x8(tile, vmem)",
        documentation: new vscode.MarkdownString(
            "Copies a 2x8-byte sprite to video memory (or screen buffer), assuming that location "+
            "to be copied is Pixel Line 0 of a character line. The destination byte must be "+
            "character aligned."),
        insertText: new vscode.SnippetString("cpctDrawTileAligned2x8(${1:tile}, ${2:vmem})"),
    },
    {
        label: "cpctDrawTileAligned2x8f",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawTileAligned2x8f(tile, vmem)",
        documentation: new vscode.MarkdownString(
            "Copies a 2x8-byte sprite to video memory (or screen buffer), assuming that location "+
            "to be copied is Pixel Line 0 of a character line. The destination byte must be "+
            "character aligned. This function is ~26% faster than cpctDrawTileAligned2x8."),
        insertText: new vscode.SnippetString("cpctDrawTileAligned2x8f(${1:tile}, ${2:vmem})"),
    },
    {
        label: "cpctDrawTileAligned4x4f",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawTileAligned4x4f(tile, vmem)",
        documentation: new vscode.MarkdownString(
            "Copies a 4x4-byte sprite to video memory (or screen buffer), assuming that location "+
            "to be copied is from Pixel Line 0 to Pixel Line 3 of a character line. The destination "+
            "byte must be character aligned."),
        insertText: new vscode.SnippetString("cpctDrawTileAligned4x4f(${1:tile}, ${2:vmem})"),
    },
    {
        label: "cpctDrawTileAligned4x8",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawTileAligned4x8(tile, vmem)",
        documentation: new vscode.MarkdownString(
            "Copies a 4x8-byte sprite to video memory (or screen buffer), assuming that location "+
            "to be copied is Pixel Line 0 of a character line. The destination "+
            "byte must be character aligned."),
        insertText: new vscode.SnippetString("cpctDrawTileAligned4x8(${1:tile}, ${2:vmem})"),
    },
    {
        label: "cpctDrawTileAligned4x8f",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawTileAligned4x8f(tile, vmem)",
        documentation: new vscode.MarkdownString(
            "Copies a 4x8-byte sprite to video memory (or screen buffer), assuming that location "+
            "to be copied is Pixel Line 0 of a character line. The destination "+
            "byte must be character aligned. This function is ~32% faster than cpctDrawTileAligned4x8."),
        insertText: new vscode.SnippetString("cpctDrawTileAligned4x8f(${1:tile}, ${2:vmem})"),
    },
    {
        label: "cpctDrawTileGrayCode2x8af",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawTileGrayCode2x8af(tile, vmem)",
        documentation: new vscode.MarkdownString(
            "Copies a 2x8-byte sprite to video memory (or screen buffer), assuming that the "+
            "sprite lines are grey-code ordered and the location to be copied is Pixel Line 0 "+
            "of a character line. The destination byte must be character aligned."),
        insertText: new vscode.SnippetString("cpctDrawTileGrayCode2x8af(${1:tile}, ${2:vmem})"),
    },
    {
        label: "cpctDrawTileZigZagGrayCode4x8af",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawTileZigZagGrayCode4x8af(tile, vmem)",
        documentation: new vscode.MarkdownString(
            "Copies a 4x8-byte sprite to video memory (or screen buffer), assuming that the sprite "+
            "lines are gray-code ordered and zig-zagged (zgtiles), and the location to be copied is "+
            "Pixel Line 0 of a character line. The destination byte must be character aligned."),
        insertText: new vscode.SnippetString("cpctDrawTileZigZagGrayCode4x8af(${1:tile}, ${2:vmem})"),
    },
    {
        label: "cpctDrawToSpriteBuffer",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawToSpriteBuffer(bufferw, buffer, w, h, sprite)",
        documentation: new vscode.MarkdownString(
            "Draws an sprite inside another sprite’s buffer.  This permits using the destination "+
            "sprite as a temporary screen back buffer."),
        insertText: new vscode.SnippetString("cpctDrawToSpriteBuffer(${1:bufferw}, ${2:buffer}, ${3:w}, ${4:h}, ${5:sprite})"),
    },
    {
        label: "cpctDrawToSpriteBufferMasked",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawToSpriteBufferMasked(bufferw, buffer, w, h, sprite)",
        documentation: new vscode.MarkdownString(
            "Draws an sprite inside another sprite’s buffer, using mask as transparency information "+
            "to prevent erasing the background.  This permits using the destination sprite as a "+
            "temporary screen back buffer."),
        insertText: new vscode.SnippetString("cpctDrawToSpriteBufferMasked(${1:bufferw}, ${2:buffer}, ${3:w}, ${4:h}, ${5:sprite})"),
    },
    {
        label: "cpctDrawToSpriteBufferMaskedAlignedTable",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawToSpriteBufferMaskedAlignedTable(bufferw, buffer, w, h, sprite, masktable)",
        documentation: new vscode.MarkdownString(
            "Draws an sprite to back buffer, making use of a given 256-bytes aligned mask table to "+
            "create transparencies."),
        insertText: new vscode.SnippetString("cpctDrawToSpriteBufferMaskedAlignedTable(${1:bufferw}, ${2:buffer}, ${3:w}, ${4:h}, ${5:sprite}, ${6:masktable})"),
    },
    {
        label: "cpctDrawSpriteHFlipM0",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawSpriteHFlipM0(sprite, vmem, w, h)",
        documentation: new vscode.MarkdownString(
            "Draws a Mode 0 sprite from an array to video memory or Hardware Back Buffer "+
            "flipping it Horizontally (right to left)."),
        insertText: new vscode.SnippetString("cpctDrawSpriteHFlipM0(${1:sprite}, ${2:vmem}, ${3:w}, ${4:h})"),
    },
    {
        label: "cpctDrawSpriteHFlipM1",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawSpriteHFlipM1(sprite, vmem, w, h)",
        documentation: new vscode.MarkdownString(
            "Draws a Mode 1 sprite from an array to video memory or Hardware Back Buffer "+
            "flipping it Horizontally (right to left)."),
        insertText: new vscode.SnippetString("cpctDrawSpriteHFlipM1(${1:sprite}, ${2:vmem}, ${3:w}, ${4:h})"),
    },
    {
        label: "cpctDrawSpriteHFlipM2",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawSpriteHFlipM2(sprite, vmem, w, h)",
        documentation: new vscode.MarkdownString(
            "Draws a Mode 2 sprite from an array to video memory or Hardware Back Buffer "+
            "flipping it Horizontally (right to left)."),
        insertText: new vscode.SnippetString("cpctDrawSpriteHFlipM2(${1:sprite}, ${2:vmem}, ${3:w}, ${4:h})"),
    },
    {
        label: "cpctDrawSpriteVFlip",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawSpriteVFlip(sprite, vmem, w, h)",
        documentation: new vscode.MarkdownString(
            "Copies a sprite from an array to video memory or Hardware Back Buffer flipping "+
            "it vertically (top to bottom)."),
        insertText: new vscode.SnippetString("cpctDrawSpriteVFlip(${1:sprite}, ${2:vmem}, ${3:w}, ${4:h})"),
    },
    {
        label: "cpctDrawSpriteVFlipMasked",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawSpriteVFlipMasked(sprite, vmem, w, h)",
        documentation: new vscode.MarkdownString(
            "Draws a masked sprite from an array to video memory or Hardware Back "+
            "Buffer flipping it vertically (top to bottom)."),
        insertText: new vscode.SnippetString("cpctDrawSpriteVFlipMasked(${1:sprite}, ${2:vmem}, ${3:w}, ${4:h})"),
    },
    {
        label: "cpctGetBottomLeftPtr",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "FUNCTION cpctGetBottomLeftPtr(vmem, h)",
        documentation: new vscode.MarkdownString(
            "Gets a pointer to the bottom-left byte of a sprite in video memory, knowing "+
            "its top-left byte and height."),
        insertText: new vscode.SnippetString("cpctGetBottomLeftPtr(${1:vmem}, ${2:h})"),
    },
    {
        label: "cpctHFlipSpriteM0",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctHFlipSpriteM0(w, h, sprite)",
        documentation: new vscode.MarkdownString(
            "Horizontally flips a sprite, encoded in screen pixel format, mode 0."),
        insertText: new vscode.SnippetString("cpctHFlipSpriteM0(${1:w}, ${2:h}, ${3:sprite})"),
    },
    {
        label: "cpctHfFlipSpriteM0r",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctHfFlipSpriteM0r(sprite, w, h)",
        documentation: new vscode.MarkdownString(
            "Horizontally flips a sprite, encoded in screen pixel format, "+
            "mode 0. ROM-friendly version."),
        insertText: new vscode.SnippetString("cpctHfFlipSpriteM0r(${1:sprite}, ${2:w}, ${3:h})"),
    },
    {
        label: "cpctHFlipSpriteM1",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctHFlipSpriteM1(w, h, sprite)",
        documentation: new vscode.MarkdownString(
            "Horizontally flips a sprite, encoded in screen pixel format, mode 1."),
        insertText: new vscode.SnippetString("cpctHFlipSpriteM1(${1:w}, ${2:h}, ${3:sprite})"),
    },
    {
        label: "cpctHFlipSpriteM1r",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctHFlipSpriteM1r(sprite, w, h)",
        documentation: new vscode.MarkdownString(
            "Horizontally flips a sprite, encoded in screen pixel format, "+
            "mode 1. ROM-friendly version."),
        insertText: new vscode.SnippetString("cpctHFlipSpriteM1r(${1:sprite}, ${2:w}, ${3:h})"),
    },
    {
        label: "cpctHFlipSpriteM2",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctHFlipSpriteM2(w, h, sprite)",
        documentation: new vscode.MarkdownString(
            "Horizontally flips a sprite, encoded in screen pixel format, mode 2."),
        insertText: new vscode.SnippetString("cpctHFlipSpriteM2(${1:w}, ${2:h}, ${3:sprite})"),
    },
    {
        label: "cpctHFlipSpriteM2r",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctHFlipSpriteM2r(sprite, w, h)",
        documentation: new vscode.MarkdownString(
            "Horizontally flips a sprite, encoded in screen pixel format, "+
            "mode 2. ROM-friendly version."),
        insertText: new vscode.SnippetString("cpctHFlipSpriteM2r(${1:sprite}, ${2:w}, ${3:h})"),
    },
    {
        label: "cpctHFlipSpriteMaskedM0",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctHFlipSpriteMaskedM0(w, h, sprite)",
        documentation: new vscode.MarkdownString(
            "Horizontally flips a sprite, encoded in screen pixel format, mode 0, with interlaced mask."),
        insertText: new vscode.SnippetString("cpctHFlipSpriteMaskedM0(${1:w}, ${2:h}, ${3:sprite})"),
    },
    {
        label: "cpctHFlipSpriteMaskedM1",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctHFlipSpriteMaskedM1(w, h, sprite)",
        documentation: new vscode.MarkdownString(
            "Horizontally flips a sprite, encoded in screen pixel format, mode 1, with interlaced mask."),
        insertText: new vscode.SnippetString("cpctHFlipSpriteMaskedM1(${1:w}, ${2:h}, ${3:sprite})"),
    },
    {
        label: "cpctHFlipSpriteMaskedM2",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctHFlipSpriteMaskedM2(w, h, sprite)",
        documentation: new vscode.MarkdownString(
            "Horizontally flips a sprite, encoded in screen pixel format, mode 2, with interlaced mask."),
        insertText: new vscode.SnippetString("cpctHFlipSpriteMaskedM2(${1:w}, ${2:h}, ${3:sprite})"),
    },
    {
        label: "cpctVFlipSprite",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctVFlipSprite(w, h, sptladdr, spbladdr)",
        documentation: new vscode.MarkdownString(
            "Flips a sprite vertically in-place, modifying it. It does it by interchanging "+
            "top and bottom rows one by one. cpctGetBottomLeftPtr can be used to retrieve "+
            "bottom-left address."),
        insertText: new vscode.SnippetString("cpctVFlipSprite(${1:w}, ${2:h}, ${3:sptl}, ${4:spbl})"),
    },
    {
        label: "cpctGetScreenToSprite",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctGetScreenToSprite(vmem, sprite, w, h)",
        documentation: new vscode.MarkdownString(
            "Copies sprite data from screen video memory to a linear array (a sprite)."),
        insertText: new vscode.SnippetString("cpctGetScreenToSprite(${1:vmem, ${1:sprite}, ${2:w}, ${3:h})"),
    },
    {
        label: "cpctDrawSolidBox",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawSolidBox(address, cpattern, w, h)",
        documentation: new vscode.MarkdownString(
            "Fills up a rectangle in video memory (or screen buffer) with a given colour data "+
            "byte. Could be used for drawing coloured rectangles as well as erasing screen "+
            "rectangles easily."),
        insertText: new vscode.SnippetString("cpctDrawSolidBox(${1:address}, ${2:cpattern}, ${3:w}, ${4:h})"),
    },
    {
        label: "cpctDrawSprite",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawSprite(sprite, videopos, spwidth, spheight)",
        documentation: new vscode.MarkdownString(
            "Copies a sprite from an array to video memory (or to a screen buffer)."),
        insertText: new vscode.SnippetString("cpctDrawSprite(${1:sprite}, ${2:videopos}, ${3:spwidth}, ${4:spheight})"),
    },
    {
        label: "cpctDrawSpriteMasked",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawSpriteMasked(sprite, vmem, w, h)",
        documentation: new vscode.MarkdownString(
            "Copies a masked sprite from an array to video memory (or to a screen buffer), using mask as "+
            "transparency information, to prevent erasing the background."),
        insertText: new vscode.SnippetString("cpctDrawSpriteMasked(${1:sprite}, ${2:vmem}, ${3:w}, ${4:h})"),
    },
    {
        label: "cpctDrawSpriteMaskedAlignedTable",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "SUB cpctDrawSpriteMaskedAlignedTable(sprite, vmem, w, h, masktable)",
        documentation: new vscode.MarkdownString(
            "Draws an sprite to video memory (or to a screen buffer), making use of a given "+
            "256-bytes aligned mask table to create transparencies."),
        insertText: new vscode.SnippetString("cpctDrawSpriteMaskedAlignedTable(${1:sprite, ${1:vmem}, ${2:w}, ${3:h}, ${4:masktable})"),
    },
    {
        label: "cpctPen2pixelPatternM0",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "FUNCTION cpctPen2pixelPatternM0(pnum)",
        documentation: new vscode.MarkdownString(
            "Returns 1 byte in Mode 0 screen pixel format containing a pattern with "+
            "all 2 pixels in the same pen colour as given by the argument PEN."),
        insertText: new vscode.SnippetString("cpctPen2pixelPatternM0(${1:pnum})"),
    },
    {
        label: "cpctPen2pixelPatternM1",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "FUNCTION cpctPen2pixelPatternM1(pnum)",
        documentation: new vscode.MarkdownString(
            "Returns 1 byte in Mode 1 screen pixel format containing a pattern with "+
            "all 4 pixels in the same pen colour as given by the argument PEN."),
        insertText: new vscode.SnippetString("cpctPen2pixelPatternM1(${1:pnum})"),
    },
    {
        label: "cpctPen2TwoPixelPatternM0",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "FUNCTION cpctPen2TwoPixelPatternM0(newpen, oldpen)",
        documentation: new vscode.MarkdownString(
            "Returns 16 bits in Mode 0 screen pixel format, containing two pattern with all "+
            "2 pixels in the same pen colour as given by the arguments OldPen and NewPen."),
        insertText: new vscode.SnippetString("cpctPen2TwoPixelPatternM0(${1:newpen}, ${2:oldpen})"),
    },
    {
        label: "cpctPen2TwoPixelPatternM1",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "FUNCTION cpctPen2TwoPixelPatternM1(newpen, oldpen)",
        documentation: new vscode.MarkdownString(
            "Returns 16 bits in Mode 1 screen pixel format, containing two pattern with all 4 "+
            "pixels in the same pen colour as given by the arguments OldPen and NewPen."),
        insertText: new vscode.SnippetString("cpctPen2TwoPixelPatternM1(${1:newpen}, ${2:oldpen})"),
    },
    {
        label: "cpctpx2byteM0",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "FUNCTION cpctpx2byteM0(px0, px1)",
        documentation: new vscode.MarkdownString(
            "Transforms 2 pixel colour values [0-15] into a byte value "+
            "in the video memory pixel format for Mode 0."),
        insertText: new vscode.SnippetString("cpctpx2byteM0(${1:px0}, ${2:px1})"),
    },
    {
        label: "cpctpx2byteM1",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/sprites.bas",
        signature: "FUNCTION cpctpx2byteM1(px0, px1, px2, px3)",
        documentation: new vscode.MarkdownString(
            "Transforms 4 pixel colour values [0-3] into a byte value in "+
            "the video memory pixel format for Mode 1."),
        insertText: new vscode.SnippetString("cpctpx2byteM1(${1:px0}, ${2:px1}, ${3:px2}, ${4:px3})"),
    },
    {
        label: "cpctDrawCharM0",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/strings.bas",
        signature: "SUB cpctDrawCharM0(vmem, chnum)",
        documentation: new vscode.MarkdownString(
            "Draws a ROM character to the screen or hardware back-buffer in Mode 0 "+
            "format (160x200 px, 16 colours)."),
        insertText: new vscode.SnippetString("cpctDrawCharM0(${1:vmem}, ${2:chnum})"),
    },
    {
        label: "cpctDrawCharM1",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/strings.bas",
        signature: "SUB cpctDrawCharM1(vmem, chnum)",
        documentation: new vscode.MarkdownString(
            "Prints a ROM character on a given byte-aligned position on the screen "+
            "in Mode 1 (320x200 px, 4 colours)."),
        insertText: new vscode.SnippetString("cpctDrawCharM1(${1:vmem}, ${2:chnum})"),
    },
    {
        label: "cpctDrawCharM2",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/strings.bas",
        signature: "SUB cpctDrawCharM2(vmem, chnum)",
        documentation: new vscode.MarkdownString(
            "Prints a ROM character on a given byte-aligned position on the screen "+
            "in Mode 2 (640x200 px, 2 colours)."),
        insertText: new vscode.SnippetString("cpctDrawCharM2(${1:vmem}, ${2:chnum})"),
    },
    {
        label: "cpctDrawStringM0",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/strings.bas",
        signature: "SUB cpctDrawStringM0(s$, vmem)",
        documentation: new vscode.MarkdownString(
            "Draws a string with ROM characters to video memory or to a hardware "+
            "backbuffer in Mode 0 (160x200, 16 colours)."),
        insertText: new vscode.SnippetString("cpctDrawStringM0(${1:string}, ${2:vmem})"),
    },
    {
        label: "cpctDrawStringM1",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/strings.bas",
        signature: "SUB cpctDrawStringM1(s$, vmem)",
        documentation: new vscode.MarkdownString(
            "Prints a string with ROM characters on a given byte-aligned "+
            "position on the screen in Mode 1 (320x200px, 4 colours)."),
        insertText: new vscode.SnippetString("cpctDrawStringM1(${1:string}, ${2:vmem})"),
    },
    {
        label: "cpctDrawStringM2",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/strings.bas",
        signature: "SUB cpctDrawStringM2(s$, vmem)",
        documentation: new vscode.MarkdownString(
            "Prints a null-terminated string with ROM characters on a given "+
            "byte-aligned position on the screen in Mode 2 (640x200px, 2 colours)."),
        insertText: new vscode.SnippetString("cpctDrawStringM2(${1:string}, ${2:vmem})"),
    },
    {
        label: "cpctSetDrawCharM0",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/strings.bas",
        signature: "SUB cpctSetDrawCharM0(fg, bg)",
        documentation: new vscode.MarkdownString(
            "Sets foreground and background colours that will be used by "+
            "cpctDrawCharM0 and cpctDrawStringM0."),
        insertText: new vscode.SnippetString("cpctSetDrawCharM0(${1:fg}, ${2:bg})"),
    },
    {
        label: "cpctSetDrawCharM1",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/strings.bas",
        signature: "SUB cpctSetDrawCharM1(fg, bg)",
        documentation: new vscode.MarkdownString(
            "Sets foreground and background colours that will be used by "+
            "cpctDrawCharM1 and cpctDrawStringM1."),
        insertText: new vscode.SnippetString("cpctSetDrawCharM1(${1:fg}, ${2:bg})"),
    },
    {
        label: "cpctSetDrawCharM2",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/strings.bas",
        signature: "SUB cpctSetDrawCharM2(fg, bg)",
        documentation: new vscode.MarkdownString(
            "Sets foreground and background colours that will be used by "+
            "cpctDrawCharM2 and cpctDrawStringM2."),
        insertText: new vscode.SnippetString("cpctSetDrawCharM2(${1:fg}, ${2:bg})"),
    },
    {
        label: "cpctClearScreen",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/video.bas",
        signature: "SUB cpctClearScreen(color)",
        documentation: new vscode.MarkdownString(
            "Fills up all the standard screen (range [0xC000-0xFFFF]) with COLOR byte, "+
            "the colour pattern given. Calls cpctMemsetf8 internally."),
        insertText: new vscode.SnippetString("cpctClearScreen(${1:color})"),
    },
    {
        label: "cpctClearScreenf64",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/video.bas",
        signature: "SUB cpctClearScreenf64(color)",
        documentation: new vscode.MarkdownString(
            "Fills up all the standard screen (range [0xC000-0xFFFF]) with COLOR byte, "+
            "the colour pattern given. Calls cpctMemsetf64 internally."),
        insertText: new vscode.SnippetString("cpctClearScreenf64(${1:color})"),
    },
    {
        label: "cpctCount2VSYNC",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/video.bas",
        signature: "FUNCTION cpctCount2VSYNC",
        documentation: new vscode.MarkdownString(
            "Waits until CRTC produces vertical synchronization signal (VSYNC), "+
            "counting the number of active wait loop cycles done."),
        insertText: new vscode.SnippetString("cpctCount2VSYNC"),
    },
    {
        label: "cpctFW2HW",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/video.bas",
        signature: "SUB cpctFW2HW(paldir, items)",
        documentation: new vscode.MarkdownString(
            "Converts an array of firmware colour values into their equivalent "+
            "hardware colour values."),
        insertText: new vscode.SnippetString("cpctFW2HW(${1:paldir}, ${2:items})"),
    },
    {
        label: "cpctGetHWColour",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/video.bas",
        signature: "FUNCTION cpctGetHWColour(fwcol)",
        documentation: new vscode.MarkdownString(
            "Converts a firmware colour value into its equivalent hardware one."),
        insertText: new vscode.SnippetString("cpctGetHWColour(${1:fwcol})"),
    },
    {
        label: "cpctGetScreenPtr",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/video.bas",
        signature: "FUNCTION cpctGetScreenPtr(vstart, x, y)",
        documentation: new vscode.MarkdownString(
            "Returns a byte-pointer to a screen memory location, given its X, Y coordinates. "+
            "(in bytes, NOT in pixels!)"),
        insertText: new vscode.SnippetString("cpctGetScreenPtr(${1:vstart}, ${2:x}, ${3:y})"),
    },
    {
        label: "cpctGetVSYNCStatus",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/video.bas",
        signature: "FUNCTION cpctGetVSYNCStatus",
        documentation: new vscode.MarkdownString(
            "Check if the vertical synchronization signal (VSYNC) is active or not."),
        insertText: new vscode.SnippetString("cpctGetVSYNCStatus"),
    },
    {
        label: "cpctSetBorder",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/video.bas",
        signature: "SUB cpctSetBorder(hwcolor)",
        documentation: new vscode.MarkdownString(
            "Changes the colour of the screen border."),
        insertText: new vscode.SnippetString("cpctSetBorder(${1:hwcolor})"),
    },
    {
        label: "cpctSetCRTCReg",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/video.bas",
        signature: "SUB cpctSetCRTCReg(regnum, newval)",
        documentation: new vscode.MarkdownString(
            "Sets a new value for a given CRTC register."),
        insertText: new vscode.SnippetString("cpctSetCRTCReg(${1:regnum}, ${2:newval})"),
    },
    {
        label: "cpctSetPALColour",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/video.bas",
        signature: "SUB cpctSetPALColour(ipen, hwcolor)",
        documentation: new vscode.MarkdownString(
            "Changes one colour value of the Palette, similarly to BASIC's INK instruction."),
        insertText: new vscode.SnippetString("cpctSetPALColour(${1:ipen}, ${2:hwcolor})"),
    },
    {
        label: "cpctSetPalette",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/video.bas",
        signature: "SUB cpctSetPalette(palptr, items)",
        documentation: new vscode.MarkdownString(
            "Changes the hardware palette colour values (selecting new ones)."),
        insertText: new vscode.SnippetString("cpctSetPalette(${1:palptr}, ${2:items})"),
    },
    {
        label: "cpctSetVideoMemoryOffset",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/video.bas",
        signature: "SUB cpctSetVideoMemoryOffset(offset)",
        documentation: new vscode.MarkdownString(
            "Sets the 8 Least Significant bits (the offset) of the memory address "+
            "where video memory starts."),
        insertText: new vscode.SnippetString("cpctSetVideoMemoryOffset(${1:offset})"),
    },
    {
        label: "cpctSetVideoMemoryPage",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/video.bas",
        signature: "SUB cpctSetVideoMemoryPage(pageid)",
        documentation: new vscode.MarkdownString(
            "Sets the 6 most significant bits (the page) of the memory address "+
            "where video memory starts (uses VMP.PAGE consts)."),
        insertText: new vscode.SnippetString("cpctSetVideoMemoryPage(${1:pageid})"),
    },
    {
        label: "cpctSetVideoMode",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/video.bas",
        signature: "SUB cpctSetVideoMode(vmode)",
        documentation: new vscode.MarkdownString(
            "Sets the video mode of the CPC Screen, changing resolution and palette size."),
        insertText: new vscode.SnippetString("cpctSetVideoMode(${1:vmode})"),
    },
    {
        label: "cpctWaitVSYNC",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/video.bas",
        signature: "SUB cpctWaitVSYNC",
        documentation: new vscode.MarkdownString(
            "Waits until CRTC produces vertical synchronization signal (VSYNC) and returns."),
        insertText: new vscode.SnippetString("cpctWaitVSYNC"),
    },
    {
        label: "cpctWaitVSYNCStart",
        kind: vscode.CompletionItemKind.Function,
        detail: "cpctelera/video.bas",
        signature: "SUB cpctWaitVSYNCStart",
        documentation: new vscode.MarkdownString(
            "Waits until the start of the vertical synchronization signal (VSYNC) and returns."),
        insertText: new vscode.SnippetString("cpctWaitVSYNCStart"),
    },
    {
        label: "AY.CHANNELA",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/audio.bas",
        signature: "CONST AY.CHANNELA",
        documentation: new vscode.MarkdownString("Channel constant identifier"),
        insertText: new vscode.SnippetString("AY.CHANNELA"),
    },
    {
        label: "AY.CHANNELB",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/audio.bas",
        signature: "CONST AY.CHANNELB",
        documentation: new vscode.MarkdownString("Channel constant identifier"),
        insertText: new vscode.SnippetString("AY.CHANNELB"),
    },
    {
        label: "AY.CHANNELC",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/audio.bas",
        signature: "CONST AY.CHANNELC",
        documentation: new vscode.MarkdownString("Channel constant identifier"),
        insertText: new vscode.SnippetString("AY.CHANNELC"),
    },
    {
        label: "AY.CHANNELALL",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/audio.bas",
        signature: "CONST AY.CHANNELALL",
        documentation: new vscode.MarkdownString("Channel constant identifier"),
        insertText: new vscode.SnippetString("AY.CHANNELALL"),
    },
    {
        label: "KEY.UP",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.UP",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.UP"),
    },
    {
        label: "KEY.RIGHT",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.RIGHT",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.RIGHT"),
    },
    {
        label: "KEY.DOWN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.DOWN",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.DOWN"),
    },
    {
        label: "KEY.F9",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.F9",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.F9"),
    },
    {
        label: "KEY.F6",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.F6",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.F6"),
    },
    {
        label: "KEY.F3",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.F3",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.F3"),
    },
    {
        label: "KEY.ENTER",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.ENTER",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.ENTER"),
    },
    {
        label: "KEY.FDOT",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.FDOT",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.FDOT"),
    },
    {
        label: "KEY.LEFT",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.LEFT",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.LEFT"),
    },
    {
        label: "KEY.COPY",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.COPY",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.COPY"),
    },
    {
        label: "KEY.F7",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.F7",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.F7"),
    },
    {
        label: "KEY.F8",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.F8",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.F8"),
    },
    {
        label: "KEY.F5",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.F5",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.F5"),
    },
    {
        label: "KEY.F1",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.F1",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.F1"),
    },
    {
        label: "KEY.F2",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.F2",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.F2"),
    },
    {
        label: "KEY.F0",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.F0",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.F0"),
    },
    {
        label: "KEY.CLR",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.CLR",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.CLR"),
    },
    {
        label: "KEY.OPENBRACKET",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.OPENBRACKET",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.OPENBRACKET"),
    },
    {
        label: "KEY.RETURN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.RETURN",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.RETURN"),
    },
    {
        label: "KEY.CLOSEBRACKET",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.CLOSEBRACKET",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.CLOSEBRACKET"),
    },
    {
        label: "KEY.F4",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.F4",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.F4"),
    },
    {
        label: "KEY.SHIFT",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.SHIFT",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.SHIFT"),
    },
    {
        label: "KEY.BACKSLASH",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.BACKSLASH",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.BACKSLASH"),
    },
    {
        label: "KEY.CONTROL",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.CONTROL",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.CONTROL"),
    },
    {
        label: "KEY.CARET",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.CARET",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.CARET"),
    },
    {
        label: "KEY.HYPHEN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.HYPHEN",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.HYPHEN"),
    },
    {
        label: "KEY.AT",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.AT",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.AT"),
    },
    {
        label: "KEY.P",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.P",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.P"),
    },
    {
        label: "KEY.SEMICOLON",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.SEMICOLON",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.SEMICOLON"),
    },
    {
        label: "KEY.COLON",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.COLON",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.COLON"),
    },
    {
        label: "KEY.SLASH",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.SLASH",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.SLASH"),
    },
    {
        label: "KEY.DOT",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.DOT",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.DOT"),
    },
    {
        label: "KEY.0",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.0",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.0"),
    },
    {
        label: "KEY.9",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.9",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.9"),
    },
    {
        label: "KEY.O",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.O",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.O"),
    },
    {
        label: "KEY.I",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.I",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.I"),
    },
    {
        label: "KEY.L",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.L",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.L"),
    },
    {
        label: "KEY.K",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.K",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.K"),
    },
    {
        label: "KEY.M",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.M",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.M"),
    },
    {
        label: "KEY.COMMA",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.COMMA",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.COMMA"),
    },
    {
        label: "KEY.8",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.8",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.8"),
    },
    {
        label: "KEY.7",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.7",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.7"),
    },
    {
        label: "KEY.U",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.U",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.U"),
    },
    {
        label: "KEY.Y",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.Y",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.Y"),
    },
    {
        label: "KEY.H",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.H",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.H"),
    },
    {
        label: "KEY.J",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.J",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.J"),
    },
    {
        label: "KEY.N",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.N",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.N"),
    },
    {
        label: "KEY.SPACE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.SPACE",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.SPACE"),
    },
    {
        label: "KEY.6",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.6",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.6"),
    },
    {
        label: "JOY1.UP",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST JOY1.UP",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("JOY1.UP"),
    },
    {
        label: "KEY.5",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.5",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.5"),
    },
    {
        label: "JOY1.DOWN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST JOY1.DOWN",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("JOY1.DOWN"),
    },
    {
        label: "KEY.R",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.R",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.R"),
    },
    {
        label: "JOY1.LEFT",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST JOY1.LEFT",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("JOY1.LEFT"),
    },
    {
        label: "KEY.T",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.T",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.T"),
    },
    {
        label: "JOY1.RIGHT",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST JOY1.RIGHT",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("JOY1.RIGHT"),
    },
    {
        label: "KEY.G",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.G",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.G"),
    },
    {
        label: "JOY1.FIRE1",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST JOY1.FIRE1",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("JOY1.FIRE1"),
    },
    {
        label: "KEY.F",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.F",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.F"),
    },
    {
        label: "JOY1.FIRE2",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST JOY1.FIRE2",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("JOY1.FIRE2"),
    },
    {
        label: "KEY.B",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.B",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.B"),
    },
    {
        label: "JOY1.FIRE3",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST JOY1.FIRE3",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("JOY1.FIRE3"),
    },
    {
        label: "KEY.V",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.V",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.V"),
    },
    {
        label: "KEY.4",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.4",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.4"),
    },
    {
        label: "KEY.3",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.3",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.3"),
    },
    {
        label: "KEY.E",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.E",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.E"),
    },
    {
        label: "KEY.W",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.W",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.W"),
    },
    {
        label: "KEY.S",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.S",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.S"),
    },
    {
        label: "KEY.D",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.D",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.D"),
    },
    {
        label: "KEY.C",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.C",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.C"),
    },
    {
        label: "KEY.X",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.X",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.X"),
    },
    {
        label: "KEY.1",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.1",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.1"),
    },
    {
        label: "KEY.2",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.2",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.2"),
    },
    {
        label: "KEY.ESC",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.ESC",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.ESC"),
    },
    {
        label: "KEY.Q",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.Q",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.Q"),
    },
    {
        label: "KEY.TAB",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.TAB",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.TAB"),
    },
    {
        label: "KEY.A",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.A",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.A"),
    },
    {
        label: "KEY.CAPSLOCK",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.CAPSLOCK",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.CAPSLOCK"),
    },
    {
        label: "KEY.Z",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.Z",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.Z"),
    },
    {
        label: "JOY0.UP",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST JOY0.UP",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("JOY0.UP"),
    },
    {
        label: "JOY0.DOWN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST JOY0.DOWN",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("JOY0.DOWN"),
    },
    {
        label: "JOY0.LEFT",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST JOY0.LEFT",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("JOY0.LEFT"),
    },
    {
        label: "JOY0.RIGHT",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST JOY0.RIGHT",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("JOY0.RIGHT"),
    },
    {
        label: "JOY0.FIRE1",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST JOY0.FIRE1",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("JOY0.FIRE1"),
    },
    {
        label: "JOY0.FIRE2",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST JOY0.FIRE2",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("JOY0.FIRE2"),
    },
    {
        label: "JOY0.FIRE3",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST JOY0.FIRE3",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("JOY0.FIRE3"),
    },
    {
        label: "KEY.DEL",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/keyboard.bas",
        signature: "CONST KEY.DEL",
        documentation: new vscode.MarkdownString("Key identifier"),
        insertText: new vscode.SnippetString("KEY.DEL"),
    },
    {
        label: "RAM.BANK0",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/memutils.bas",
        signature: "CONST RAM.BANK0",
        documentation: new vscode.MarkdownString(
            "Constant to be used with cpctPageMemory. CFG values and BANK "+
            "values must be combined using OR in the same call."),
        insertText: new vscode.SnippetString("RAM.BANK0"),
    },
    {
        label: "RAM.BANK1",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/memutils.bas",
        signature: "CONST RAM.BANK1",
        documentation: new vscode.MarkdownString(
            "Constant to be used with cpctPageMemory. CFG values and BANK "+
            "values must be combined using OR in the same call."),
        insertText: new vscode.SnippetString("RAM.BANK1"),
    },
    {
        label: "RAM.BANK2",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/memutils.bas",
        signature: "CONST RAM.BANK2",
        documentation: new vscode.MarkdownString(
            "Constant to be used with cpctPageMemory. CFG values and BANK "+
            "values must be combined using OR in the same call."),
        insertText: new vscode.SnippetString("RAM.BANK2"),
    },
    {
        label: "RAM.BANK3",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/memutils.bas",
        signature: "CONST RAM.BANK3",
        documentation: new vscode.MarkdownString(
            "Constant to be used with cpctPageMemory. CFG values and BANK "+
            "values must be combined using OR in the same call."),
        insertText: new vscode.SnippetString("RAM.BANK3"),
    },
    {
        label: "RAM.BANK4",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/memutils.bas",
        signature: "CONST RAM.BANK4",
        documentation: new vscode.MarkdownString(
            "Constant to be used with cpctPageMemory. CFG values and BANK "+
            "values must be combined using OR in the same call."),
        insertText: new vscode.SnippetString("RAM.BANK4"),
    },
    {
        label: "RAM.BANK5",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/memutils.bas",
        signature: "CONST RAM.BANK5",
        documentation: new vscode.MarkdownString(
            "Constant to be used with cpctPageMemory. CFG values and BANK "+
            "values must be combined using OR in the same call."),
        insertText: new vscode.SnippetString("RAM.BANK5"),
    },
    {
        label: "RAM.BANK6",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/memutils.bas",
        signature: "CONST RAM.BANK6",
        documentation: new vscode.MarkdownString(
            "Constant to be used with cpctPageMemory. CFG values and BANK "+
            "values must be combined using OR in the same call."),
        insertText: new vscode.SnippetString("RAM.BANK6"),
    },
    {
        label: "RAM.BANK7",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/memutils.bas",
        signature: "CONST RAM.BANK7",
        documentation: new vscode.MarkdownString(
            "Constant to be used with cpctPageMemory. CFG values and BANK "+
            "values must be combined using OR in the same call."),
        insertText: new vscode.SnippetString("RAM.BANK7"),
    },
    {
        label: "RAM.CFG0",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/memutils.bas",
        signature: "CONST RAM.CFG0",
        documentation: new vscode.MarkdownString(
            "Constant to be used with cpctPageMemory. CFG values and BANK "+
            "values must be combined using OR in the same call."),
        insertText: new vscode.SnippetString("RAM.CFG0"),
    },
    {
        label: "RAM.CFG1",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/memutils.bas",
        signature: "CONST RAM.CFG1",
        documentation: new vscode.MarkdownString(
            "Constant to be used with cpctPageMemory. CFG values and BANK "+
            "values must be combined using OR in the same call."),
        insertText: new vscode.SnippetString("RAM.CFG1"),
    },
    {
        label: "RAM.CFG2",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/memutils.bas",
        signature: "CONST RAM.CFG2",
        documentation: new vscode.MarkdownString(
            "Constant to be used with cpctPageMemory. CFG values and BANK "+
            "values must be combined using OR in the same call."),
        insertText: new vscode.SnippetString("RAM.CFG2"),
    },
    {
        label: "RAM.CFG3",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/memutils.bas",
        signature: "CONST RAM.CFG3",
        documentation: new vscode.MarkdownString(
            "Constant to be used with cpctPageMemory. CFG values and BANK "+
            "values must be combined using OR in the same call."),
        insertText: new vscode.SnippetString("RAM.CFG3"),
    },
    {
        label: "RAM.CFG4",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/memutils.bas",
        signature: "CONST RAM.CFG4",
        documentation: new vscode.MarkdownString(
            "Constant to be used with cpctPageMemory. CFG values and BANK "+
            "values must be combined using OR in the same call."),
        insertText: new vscode.SnippetString("RAM.CFG4"),
    },
    {
        label: "RAM.CFG5",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/memutils.bas",
        signature: "CONST RAM.CFG5",
        documentation: new vscode.MarkdownString(
            "Constant to be used with cpctPageMemory. CFG values and BANK "+
            "values must be combined using OR in the same call."),
        insertText: new vscode.SnippetString("RAM.CFG5"),
    },
    {
        label: "RAM.CFG6",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/memutils.bas",
        signature: "CONST RAM.CFG6",
        documentation: new vscode.MarkdownString(
            "Constant to be used with cpctPageMemory. CFG values and BANK "+
            "values must be combined using OR in the same call."),
        insertText: new vscode.SnippetString("RAM.CFG6"),
    },
    {
        label: "RAM.CFG7",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/memutils.bas",
        signature: "CONST RAM.CFG7",
        documentation: new vscode.MarkdownString(
            "Constant to be used with cpctPageMemory. CFG values and BANK "+
            "values must be combined using OR in the same call."),
        insertText: new vscode.SnippetString("RAM.CFG7"),
    },
    {
        label: "RAM.DEFAULTCFG",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/memutils.bas",
        signature: "CONST RAM.DEFAULTCFG",
        documentation: new vscode.MarkdownString(
            "Constant to be used with cpctPageMemory. Equal to (RAM.CFG0 OR RAM.BANK0)"),
        insertText: new vscode.SnippetString("RAM.DEFAULTCFG"),
    },
    {
        label: "CPCTBLEND.XOR",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/sprites.bas",
        signature: "CONST CPCTBLEND.XOR",
        documentation: new vscode.MarkdownString(
            "Blender mode to be used with cpctSetBlendMode"),
        insertText: new vscode.SnippetString("CPCTBLEND.XOR"),
    },
    {
        label: "CPCTBLEND.AND",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/sprites.bas",
        signature: "CONST CPCTBLEND.AND",
        documentation: new vscode.MarkdownString(
            "Blender mode to be used with cpctSetBlendMode"),
        insertText: new vscode.SnippetString("CPCTBLEND.AND"),
    },
    {
        label: "CPCTBLEND.OR",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/sprites.bas",
        signature: "CONST CPCTBLEND.OR",
        documentation: new vscode.MarkdownString(
            "Blender mode to be used with cpctSetBlendMode"),
        insertText: new vscode.SnippetString("CPCTBLEND.OR"),
    },
    {
        label: "CPCTBLEND.ADD",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/sprites.bas",
        signature: "CONST CPCTBLEND.ADD",
        documentation: new vscode.MarkdownString(
            "Blender mode to be used with cpctSetBlendMode"),
        insertText: new vscode.SnippetString("CPCTBLEND.ADD"),
    },
    {
        label: "CPCTBLEND.ADC",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/sprites.bas",
        signature: "CONST CPCTBLEND.ADC",
        documentation: new vscode.MarkdownString(
            "Blender mode to be used with cpctSetBlendMode"),
        insertText: new vscode.SnippetString("CPCTBLEND.ADC"),
    },
    {
        label: "CPCTBLEND.SBC",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/sprites.bas",
        signature: "CONST CPCTBLEND.SBC",
        documentation: new vscode.MarkdownString(
            "Blender mode to be used with cpctSetBlendMode"),
        insertText: new vscode.SnippetString("CPCTBLEND.SBC"),
    },
    {
        label: "CPCTBLEND.SUB",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/sprites.bas",
        signature: "CONST CPCTBLEND.SUB",
        documentation: new vscode.MarkdownString(
            "Blender mode to be used with cpctSetBlendMode"),
        insertText: new vscode.SnippetString("CPCTBLEND.SUB"),
    },
    {
        label: "CPCTBLEND.LDI",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/sprites.bas",
        signature: "CONST CPCTBLEND.LDI",
        documentation: new vscode.MarkdownString(
            "Blender mode to be used with cpctSetBlendMode"),
        insertText: new vscode.SnippetString("CPCTBLEND.LDI"),
    },
    {
        label: "CPCTBLEND.NOP",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/sprites.bas",
        signature: "CONST CPCTBLEND.NOP",
        documentation: new vscode.MarkdownString(
            "Blender mode to be used with cpctSetBlendMode"),
        insertText: new vscode.SnippetString("CPCTBLEND.NOP"),
    },
    {
        label: "CPCT.VMEMSTART",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST CPCT.VMEMSTART",
        documentation: new vscode.MarkdownString("Video memory default address"),
        insertText: new vscode.SnippetString("CPCT.VMEMSTART"),
    },
    {
        label: "CPCT.VMEMSIZE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST CPCT.VMEMSIZE",
        documentation: new vscode.MarkdownString("Video memory default length"),
        insertText: new vscode.SnippetString("CPCT.VMEMSIZE"),
    },
    {
        label: "FWC.BLACK",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.BLACK",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.BLACK"),
    },
    {
        label: "FWC.BLUE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.BLUE",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.BLUE"),
    },
    {
        label: "FWC.BRIGHTBLUE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.BRIGHTBLUE",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.BRIGHTBLUE"),
    },
    {
        label: "FWC.RED",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.RED",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.RED"),
    },
    {
        label: "FWC.MAGENTA",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.MAGENTA",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.MAGENTA"),
    },
    {
        label: "FWC.MAUVE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.MAUVE",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.MAUVE"),
    },
    {
        label: "FWC.BRIGHTRED",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.BRIGHTRED",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.BRIGHTRED"),
    },
    {
        label: "FWC.PURPLE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.PURPLE",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.PURPLE"),
    },
    {
        label: "FWC.BRIGHTMAGENTA",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.BRIGHTMAGENTA",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.BRIGHTMAGENTA"),
    },
    {
        label: "FWC.GREEN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.GREEN",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.GREEN"),
    },
    {
        label: "FWC.CYAN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.CYAN",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.CYAN"),
    },
    {
        label: "FWC.SKYBLUE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.SKYBLUE",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.SKYBLUE"),
    },
    {
        label: "FWC.YELLOW",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.YELLOW",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.YELLOW"),
    },
    {
        label: "FWC.WHITE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.WHITE",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.WHITE"),
    },
    {
        label: "FWC.PASTELBLUE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.PASTELBLUE",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.PASTELBLUE"),
    },
    {
        label: "FWC.ORANGE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.ORANGE",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.ORANGE"),
    },
    {
        label: "FWC.PINK",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.PINK",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.PINK"),
    },
    {
        label: "FWC.PASTERMAGENTA",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.PASTERMAGENTA",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.PASTERMAGENTA"),
    },
    {
        label: "FWC.BRIGHTGREEN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.BRIGHTGREEN",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.BRIGHTGREEN"),
    },
    {
        label: "FWC.SEAGREEN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.SEAGREEN",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.SEAGREEN"),
    },
    {
        label: "FWC.BRIGHTCYAN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.BRIGHTCYAN",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.BRIGHTCYAN"),
    },
    {
        label: "FWC.LIME",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.LIME",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.LIME"),
    },
    {
        label: "FWC.PASTELGREEN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.PASTELGREEN",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.PASTELGREEN"),
    },
    {
        label: "FWC.PASTELCYAN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.PASTELCYAN",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.PASTELCYAN"),
    },
    {
        label: "FWC.BRIGHTYELLOW",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.BRIGHTYELLOW",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.BRIGHTYELLOW"),
    },
    {
        label: "FWC.PASTELYELLOW",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.PASTELYELLOW",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.PASTELYELLOW"),
    },
    {
        label: "FWC.BRIGHTWHITE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST FWC.BRIGHTWHITE",
        documentation: new vscode.MarkdownString(
            "Firmware colour (as used in INK command). A palette of firmware "+
            "colours can be converted to HW colours using cpctFW2HW."),
        insertText: new vscode.SnippetString("FWC.BRIGHTWHITE"),
    },
    {
        label: "HWC.BLACK",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.BLACK",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.BLACK"),
    },
    {
        label: "HWC.BLUE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.BLUE",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.BLUE"),
    },
    {
        label: "HWC.BRIGHTBLUE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.BRIGHTBLUE",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.BRIGHTBLUE"),
    },
    {
        label: "HWC.RED",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.RED",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.RED"),
    },
    {
        label: "HWC.MAGENTA",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.MAGENTA",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.MAGENTA"),
    },
    {
        label: "HWC.MAUVE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.MAUVE",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.MAUVE"),
    },
    {
        label: "HWC.BRIGHTRED",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.BRIGHTRED",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.BRIGHTRED"),
    },
    {
        label: "HWC.PURPLE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.PURPLE",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.PURPLE"),
    },
    {
        label: "HWC.BRIGHTMAGENTA",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.BRIGHTMAGENTA",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.BRIGHTMAGENTA"),
    },
    {
        label: "HWC.GREEN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.GREEN",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.GREEN"),
    },
    {
        label: "HWC.CYAN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.CYAN",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.CYAN"),
    },
    {
        label: "HWC.SKYBLUE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.SKYBLUE",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.SKYBLUE"),
    },
    {
        label: "HWC.YELLOW",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.YELLOW",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.YELLOW"),
    },
    {
        label: "HWC.WHITE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.WHITE",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.WHITE"),
    },
    {
        label: "HWC.PASTELBLUE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.PASTELBLUE",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.PASTELBLUE"),
    },
    {
        label: "HWC.ORANGE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.ORANGE",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.ORANGE"),
    },
    {
        label: "HWC.PINK",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.PINK",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.PINK"),
    },
    {
        label: "HWC.PASTERMAGENTA",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.PASTERMAGENTA",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.PASTERMAGENTA"),
    },
    {
        label: "HWC.BRIGHTGREEN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.BRIGHTGREEN",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.BRIGHTGREEN"),
    },
    {
        label: "HWC.SEAGREEN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.SEAGREEN",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.SEAGREEN"),
    },
    {
        label: "HWC.BRIGHTCYAN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.BRIGHTCYAN",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.BRIGHTCYAN"),
    },
    {
        label: "HWC.LIME",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.LIME",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.LIME"),
    },
    {
        label: "HWC.PASTELGREEN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.PASTELGREEN",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.PASTELGREEN"),
    },
    {
        label: "HWC.PASTELCYAN",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.PASTELCYAN",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.PASTELCYAN"),
    },
    {
        label: "HWC.BRIGHTYELLOW",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.BRIGHTYELLOW",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.BRIGHTYELLOW"),
    },
    {
        label: "HWC.PASTELYELLOW",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.PASTELYELLOW",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.PASTELYELLOW"),
    },
    {
        label: "HWC.BRIGHTWHITE",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST HWC.BRIGHTWHITE",
        documentation: new vscode.MarkdownString("Hardware colour value"),
        insertText: new vscode.SnippetString("HWC.BRIGHTWHITE"),
    },
    {
        label: "VMP.PAGEC0",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST VMP.PAGEC0",
        documentation: new vscode.MarkdownString("Constant to be used in cpctSetVideoMemoryPage"),
        insertText: new vscode.SnippetString("VMP.PAGEC0"),
    },
    {
        label: "VMP.PAGE80",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST VMP.PAGE80",
        documentation: new vscode.MarkdownString("Constant to be used in cpctSetVideoMemoryPage"),
        insertText: new vscode.SnippetString("VMP.PAGE80"),
    },
    {
        label: "VMP.PAGE40",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST VMP.PAGE40",
        documentation: new vscode.MarkdownString("Constant to be used in cpctSetVideoMemoryPage"),
        insertText: new vscode.SnippetString("VMP.PAGE40"),
    },
    {
        label: "VMP.PAGE00",
        kind: vscode.CompletionItemKind.Variable,
        detail: "cpctelera/video.bas",
        signature: "CONST VMP.PAGE00",
        documentation: new vscode.MarkdownString("Constant to be used in cpctSetVideoMemoryPage"),
        insertText: new vscode.SnippetString("VMP.PAGE00"),
    }
];