var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

Services.scriptloader.loadSubScript("chrome://xnote/content/xnote-dateformat.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://xnote/content/xnote-classe.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://xnote/content/xnote-overlay.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://xnote/content/xnote-columnnote.js", window, "UTF-8");
/*
Services.scriptloader.loadSubScript("chrome://quickfolders/content/quickfolders-filterWorker.js", window, "UTF-8");
//Services.scriptloader.loadSubScript("chrome://quickfolders/content/quickfolders-register.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://quickfolders/content/quickfolders-util.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://quickfolders/content/quickfolders-interface.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://quickfolders/content/quickfolders-rsa.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://quickfolders/content/quickfolders-register.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://quickfolders/content/quickfolders-quickMove.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://quickfolders/content/quickfolders-bookmarks.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://quickfolders/content/quickfolders-change-order.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://quickfolders/content/quickfolders-model.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://quickfolders/content/qf-advancedTab.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://quickfolders/content/quickfolders-folderTree.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://quickfolders/content/quickfolders-folder-category.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://quickfolders/content/qf-styles.js", window, "UTF-8");
Services.scriptloader.loadSubScript("chrome://quickfolders/content/quickfolders-listener.js", window, "UTF-8");
*/

function onLoad(activatedWhileWindowOpen) {
    console.log (Services.appinfo.version);
    let layout = WL.injectCSS("chrome://xnote/content/skin/xnote-overlay.css");
 //   layout.setAttribute("title", "QuickFolderStyles");
/*    
    let tb = WL.injectCSS("chrome://quickfolders/content/quickfolders-thunderbird.css");
    // tb.setAttribute("title", "QuickFolderStyles");
    
    WL.injectCSS("chrome://quickfolders/content/skin/quickfolders-widgets.css");
    WL.injectCSS("chrome://quickfolders/content/qf-foldertree.css");
    WL.injectCSS("chrome://quickfolders/content/quickfolders-filters.css");
    WL.injectCSS("chrome://quickfolders/content/quickfolders-68.css");
    WL.injectCSS("chrome://quickfolders/content/quickfolders-mods.css");
*/
    let str1="clicBouton";
    WL.injectElements(`
    <!-- Toolbar button -->
	<toolbox id="mail-toolbox">
		<toolbarpalette id="MailToolbarPalette">
			<toolbarbutton
				id="xnote-toolbar-button"
				class="toolbarbutton-1 chromeclass-toolbar-additional"
                                label="&xnote.label;"
                                disabled="true"
        oncommand="xnote.ns.Overlay.initialise('clicBouton');">
			</toolbarbutton>
		</toolbarpalette>
  </toolbox>
  

    <stringbundleset id="xnote-stringbundleset">
    <stringbundle id="xnote-stringbundle-overlay" src="chrome://xnote/locale/xnote-overlay.properties"/>
    </stringbundleset>
    
    <!-- Context menu for message list -->
    <popup id="mailContext">
    <menu id="xnote-mailContext-xNote" label="&xnote.label;" accesskey="&xnote.key;"
              image="chrome://xnote/content/skin/xnote_context.png" class="menuitem-iconic"
              insertbefore="mailContext-openInBrowser,mailContext-openNewWindow">
        <menupopup>
             <menuitem id="xnote-context-create" label="&ajout.label;" accesskey="&ajout.key;"
                oncommand="xnote.ns.Overlay.context_createNote();">
            </menuitem>
            <menuitem id="xnote-context-modify" label="&modif.label;" accesskey="&modif.key;"
                oncommand="xnote.ns.Overlay.context_modifyNote();">
            </menuitem>
            <menuitem id="xnote-context-delete" label="&suppr.label;" accesskey="&suppr.key;"
                oncommand="goDoCommand('cmd_label0'); xnote.ns.Overlay.context_deleteNote();">
      <!--
        It seems the observes element is no longer working as of TB 68.
        Disabling now via JavaScript.
      -->
                <observes element="xnote-context-modify" attribute="hidden"/>
            </menuitem>
           
            
    <menuseparator id="xnote-context-separator-after-delete">
      <observes element="xnote-context-modify" attribute="hidden" />
    </menuseparator>
    <menuitem id="xnote-context-reset-note-window" label="&resetNoteWindow.label;"
      oncommand="xnote.ns.Overlay.context_resetNoteWindow();">
      <observes element="xnote-context-modify" attribute="hidden"/>
    </menuitem>
        </menupopup>
    </menu>
    <menuseparator id="xnote-mailContext-sep-xNote" insertbefore="mailContext-openInBrowser,mailContext-openNewWindow"/>
    </popup>
    
    <tree id="threadTree">
    <treecols id="threadCols">
    <splitter class="tree-splitter" />
    <treecol id="xnoteCol" persist="hidden ordinal width" label="&xnote.label;"
       currentView="unthreaded" is="treecol-image" 
       class="treecol-image xnote-column-header" tooltiptext="&header.label;" />
    </treecols>
    </tree>
  
  `, ["chrome://xnote/locale/xnote-overlay.dtd"]);

/*
   
    window.QuickFolders.Util.logDebug('Adding Folder Listener...');
    window.QuickFolders_mailSession.AddFolderListener(window.QuickFolders.FolderListener, Components.interfaces.nsIFolderListener.all);
//   obsolete   window.QuickFolders.addLoadEventListener();
    window.QuickFolders.initDelayed(window, WL);
*/
window.xnote.ns.Overlay.onLoad();
window.xnote.ns.ColumnNote.doOnceLoaded();
}

function onUnload(isAddOnShutDown) {
 

  }
