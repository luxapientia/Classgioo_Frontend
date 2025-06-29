"use client";

import React from "react";
import { useTheme } from "next-themes";

import { Editor } from "@tinymce/tinymce-react";

if (typeof window !== "undefined") {
  // TinyMCE so the global var exists
  require("tinymce/tinymce");
  // DOM model
  require("tinymce/models/dom/model");
  // Theme
  require("tinymce/themes/silver");
  // Toolbar icons
  require("tinymce/icons/default");
  // Editor styles
  require("tinymce/skins/ui/oxide/skin");

  // importing the plugin js.
  // if you use a plugin that is not listed here the editor will fail to load
  require("tinymce/plugins/advlist");
  require("tinymce/plugins/anchor");
  require("tinymce/plugins/autolink");
  require("tinymce/plugins/autoresize");
  require("tinymce/plugins/autosave");
  require("tinymce/plugins/charmap");
  require("tinymce/plugins/code");
  require("tinymce/plugins/codesample");
  require("tinymce/plugins/directionality");
  require("tinymce/plugins/emoticons");
  require("tinymce/plugins/fullscreen");
  require("tinymce/plugins/help");
  require("tinymce/plugins/help/js/i18n/keynav/en");
  require("tinymce/plugins/image");
  require("tinymce/plugins/importcss");
  require("tinymce/plugins/insertdatetime");
  require("tinymce/plugins/link");
  require("tinymce/plugins/lists");
  require("tinymce/plugins/media");
  require("tinymce/plugins/nonbreaking");
  require("tinymce/plugins/pagebreak");
  require("tinymce/plugins/preview");
  require("tinymce/plugins/quickbars");
  require("tinymce/plugins/save");
  require("tinymce/plugins/searchreplace");
  require("tinymce/plugins/table");
  require("tinymce/plugins/visualblocks");
  require("tinymce/plugins/visualchars");
  require("tinymce/plugins/wordcount");

  // importing plugin resources
  require("tinymce/plugins/emoticons/js/emojis");

  // Content styles, including inline UI like fake cursors
  require("tinymce/skins/content/default/content");
  require("tinymce/skins/content/dark/content");
  require("tinymce/skins/ui/oxide/content");
  require("tinymce/skins/ui/oxide-dark/content");
  require("tinymce/skins/ui/oxide-dark/skin");
}
export default function TinyEditor(props) {
  const { theme } = useTheme();
  return (
    <Editor
      licenseKey="gpl"
      promotion={false}
      init={{
        custom_elements:
          "math,mi,mn,mo,mrow,msqrt,msup,msub,msubsup,mfrac,mtable,mtr,mtd,ms,mtext,menclose,annotation,semantics,math",
        extended_valid_elements:
          "math[*],mi[*],mn[*],mo[*],mrow[*],msqrt[*],msup[*],msub[*],msubsup[*],mfrac[*],mtable[*],mtr[*],mtd[*],ms[*],mtext[*],menclose[*],annotation[*],semantics[*]",

        // Optional: if content is still getting stripped, allow all elements and attributes
        valid_children: "+body[math]",
        valid_elements: "*[*]",

        // Avoid cleanup removing math
        verify_html: false,
        content_css: false,
        external_plugins: {
          tiny_mce_wiris: `${process.env.APP_BASE_URL}/tinymce-plugins/mathtype6/plugin.min.js`,
        },
        plugins:
          "advlist anchor autolink autoresize autosave charmap code codesample directionality emoticons fullscreen help image importcss insertdatetime link lists media nonbreaking pagebreak preview quickbars save searchreplace table visualblocks visualchars wordcount",
        promotion: false,
        branding: false,
        highlight_on_focus: false,
        // skin: theme === "dark" ? "oxide-dark" : "oxide",
        // content_css: theme === "dark" ? "dark" : "default",
        skin: "oxide",
        content_css: "default",
        ...props.init,
      }}
      value={props?.value}
      onEditorChange={(v) => props?.onChange(v)}
      suppressHydrationWarning
    />
  );
}
