playSound("ps4-theme.mp3", true);
onEvent("butt_start", "click", function( ) {
  if (getProperty("butt_getstarted", "hidden")) {
    setProperty("butt_getstarted", "hidden", false);
    setProperty("text_welcome", "hidden", false);
    setProperty("text_createdby", "hidden", true);
    setText("butt_start", "BACK");
  } else {
    setProperty("butt_getstarted", "hidden", true);
    setProperty("text_welcome", "hidden", true);
    setProperty("text_createdby", "hidden", false);
    setText("butt_start", "START");
  }
});
onEvent("butt_getstarted", "click", function( ) {
  setImageURL("img_bckgrnd_list", "ps-logo.jpeg");
  setProperty("butt_tlou2", "hidden", true);
  setProperty("butt_gow", "hidden", true);
  setProperty("butt_rdr2", "hidden", true);
  setProperty("butt_u4", "hidden", true);
  setProperty("butt_hzd", "hidden", true);
  setProperty("text_cyvg", "hidden", true);
  setProperty("text_slogan", "hidden", false);
  setProperty("text_spons", "hidden", false);
  setProperty("butt_showspons", "hidden", true);
  setProperty("butt_hidespons", "hidden", false);
  setProperty("butt_spons", "hidden", false);
  setScreen("screen_list");
});
onEvent("butt_mainmenu", "click", function( ) {
  setProperty("butt_getstarted", "hidden", true);
  setProperty("text_welcome", "hidden", true);
  setProperty("text_createdby", "hidden", false);
  setText("butt_start", "START");
  setScreen("screen_menu");
});
onEvent("butt_hidespons", "click", function( ) {
  setImageURL("img_bckgrnd_list", "bluebackgroud.jpeg");
  setProperty("butt_tlou2", "hidden", false);
  setProperty("butt_gow", "hidden", false);
  setProperty("butt_rdr2", "hidden", false);
  setProperty("butt_u4", "hidden", false);
  setProperty("butt_hzd", "hidden", false);
  setProperty("text_cyvg", "hidden", false);
  setProperty("text_slogan", "hidden", true);
  setProperty("text_spons", "hidden", true);
  setProperty("butt_spons", "hidden", true);
  setProperty("butt_showspons", "hidden", false);
  setProperty("butt_hidespons", "hidden", true);
});
onEvent("butt_showspons", "click", function( ) {
  setImageURL("img_bckgrnd_list", "ps-logo.jpeg");
  setProperty("butt_tlou2", "hidden", true);
  setProperty("butt_gow", "hidden", true);
  setProperty("butt_rdr2", "hidden", true);
  setProperty("butt_u4", "hidden", true);
  setProperty("butt_hzd", "hidden", true);
  setProperty("text_cyvg", "hidden", true);
  setProperty("text_slogan", "hidden", false);
  setProperty("text_spons", "hidden", false);
  setProperty("butt_spons", "hidden", false);
  setProperty("butt_hidespons", "hidden", false);
  setProperty("butt_showspons", "hidden", true);
});
onEvent("img_off_list", "click", function( ) {
  setProperty("img_off_list", "hidden", true);
  setProperty("img_on_list", "hidden", false);
  stopSound("ps4-theme.mp3");
});
onEvent("img_on_list", "click", function( ) {
  setProperty("img_off_list", "hidden", false);
  setProperty("img_on_list", "hidden", true);
  playSound("ps4-theme.mp3", true);
});
onEvent("butt_spons", "click", function( ) {
  setScreen("screen_spons");
});
onEvent("butt_tlou2", "click", function( ) {
  stopSound("ps4-theme.mp3");
  setScreen("screen_tlou2");
  setProperty("img_off_tlou", "hidden", true);
  setProperty("img_on_tlou", "hidden", false);
});
onEvent("butt_gow", "click", function( ) {
  stopSound("ps4-theme.mp3");
  setScreen("screen_gow");
  setProperty("img_off_gow", "hidden", true);
  setProperty("img_on_gow", "hidden", false);
});
onEvent("butt_rdr2", "click", function( ) {
  stopSound("ps4-theme.mp3");
  setScreen("screen_rdr2");
  setProperty("img_off_rdr", "hidden", true);
  setProperty("img_on_rdr", "hidden", false);
});
onEvent("butt_u4", "click", function( ) {
  stopSound("ps4-theme.mp3");
  setScreen("screen_u4");
  setProperty("img_off_u4", "hidden", true);
  setProperty("img_on_u4", "hidden", false);
});
onEvent("butt_hzd", "click", function( ) {
  stopSound("ps4-theme.mp3");
  setScreen("screen_hzd");
  setProperty("img_off_hzd", "hidden", true);
  setProperty("img_on_hzd", "hidden", false);
});
onEvent("butt_back_spons", "click", function( ) {
  setScreen("screen_list");
});
setImageURL("img_tlou2bchgrnd", "tlou2-cover.jpg");
onEvent("butt_back_tlou2_1", "click", function( ) {
  stopSound("tlou2-theme.mp3");
  playSound("ps4-theme.mp3", true);
  setProperty("img_off_list", "hidden", false);
  setProperty("img_on_list", "hidden", true);
  setImageURL("img_tlou2bchgrnd", "tlou2-cover.jpg");
  setProperty("butt_clear_tlou2_1", "hidden", true);
  setProperty("text_desc_tlou2", "hidden", true);
  setScreen("screen_list");
  setProperty("img_tlou2_1", "hidden", true);
  setProperty("img_tlou2_2", "hidden", true);
  setProperty("img_tlou2_3", "hidden", true);
});
onEvent("img_off_tlou", "click", function( ) {
  setProperty("img_off_tlou", "hidden", true);
  setProperty("img_on_tlou", "hidden", false);
  stopSound("tlou2-theme.mp3");
});
onEvent("img_on_tlou", "click", function( ) {
  setProperty("img_off_tlou", "hidden", false);
  setProperty("img_on_tlou", "hidden", true);
  playSound("tlou2-theme.mp3", true);
});
onEvent("butt_desc_tlou", "click", function( ) {
  setImageURL("img_tlou2bchgrnd", "tlou2-cover.jpg");
  setProperty("butt_clear_tlou2_1", "hidden", false);
  setProperty("text_desc_tlou2", "hidden", false);
  setProperty("img_tlou2_1", "hidden", true);
  setProperty("img_tlou2_2", "hidden", true);
  setProperty("img_tlou2_3", "hidden", true);
});
onEvent("butt_clear_tlou2_1", "click", function( ) {
  setImageURL("img_tlou2bchgrnd", "tlou2-cover.jpg");
  setProperty("butt_clear_tlou2_1", "hidden", true);
  setProperty("text_desc_tlou2", "hidden", true);
  setProperty("img_tlou2_1", "hidden", true);
  setProperty("img_tlou2_2", "hidden", true);
  setProperty("img_tlou2_3", "hidden", true);
});
onEvent("butt_ingame_tlou", "click", function( ) {
  setImageURL("img_tlou2bchgrnd", "bluebackgroud.jpeg");
  setProperty("butt_clear_tlou2_1", "hidden", false);
  setProperty("text_desc_tlou2", "hidden", true);
  setImageURL("img_tlou2_1", "img-tlou2-2.jpg");
  setImageURL("img_tlou2_2", "img-tlou2-1.jpg");
  setImageURL("img_tlou2_3", "img-tlou2-3.jpg");
  setProperty("img_tlou2_1", "width", 300);
  setProperty("img_tlou2_2", "width", 300);
  setProperty("img_tlou2_2", "x", 10);
  setProperty("img_tlou2_3", "width", 300);
  setProperty("img_tlou2_1", "hidden", false);
  setProperty("img_tlou2_2", "hidden", false);
  setProperty("img_tlou2_3", "hidden", false);
});
onEvent("butt_vids_tlou", "click", function( ) {
  setImageURL("img_tlou2bchgrnd", "bluebackgroud.jpeg");
  setProperty("butt_clear_tlou2_1", "hidden", false);
  setProperty("text_desc_tlou2", "hidden", true);
  setImageURL("img_tlou2_1", "img-tlou-ytb-1.jpeg");
  setImageURL("img_tlou2_2", "img-tlou-ytb-2.jpeg");
  setImageURL("img_tlou2_3", "img-tlou-ytb-3.jpeg");
  setProperty("img_tlou2_1", "width", 175);
  setProperty("img_tlou2_2", "width", 175);
  setProperty("img_tlou2_2", "x", "135");
  setProperty("img_tlou2_3", "width", 175);
  setProperty("img_tlou2_1", "hidden", false);
  setProperty("img_tlou2_2", "hidden", false);
  setProperty("img_tlou2_3", "hidden", false);
});
onEvent("img_tlou2_1", "click", function( ) {
  if (getXPosition("img_tlou2_2") == 135) {
    open("https://youtu.be/btmN-bWwv0A");
  }
});
onEvent("img_tlou2_2", "click", function( ) {
  if (getXPosition("img_tlou2_2") == 135) {
    open("https://youtu.be/BeI9MeYoka4");
  }
});
onEvent("img_tlou2_3", "click", function( ) {
  if (getXPosition("img_tlou2_2") == 135) {
    open("https://youtu.be/UBVzAIUInEE");
  }
});
setImageURL("img_gowbckgrnd", "gow-cover.jpg");
onEvent("butt_back_gow_1", "click", function( ) {
  stopSound("gow-theme.mp3");
  playSound("ps4-theme.mp3", true);
  setProperty("img_off_list", "hidden", false);
  setProperty("img_on_list", "hidden", true);
  setImageURL("img_gowbckgrnd", "gow-cover.jpg");
  setProperty("butt_clear_gow_1", "hidden", true);
  setProperty("text_desc_gow", "hidden", true);
  setScreen("screen_list");
  setProperty("img_gow_1", "hidden", true);
  setProperty("img_gow_2", "hidden", true);
  setProperty("img_gow_3", "hidden", true);
});
onEvent("img_off_gow", "click", function( ) {
  setProperty("img_off_gow", "hidden", true);
  setProperty("img_on_gow", "hidden", false);
  stopSound("gow-theme.mp3");
});
onEvent("img_on_gow", "click", function( ) {
  setProperty("img_off_gow", "hidden", false);
  setProperty("img_on_gow", "hidden", true);
  playSound("gow-theme.mp3", true);
});
onEvent("butt_desc_gow", "click", function( ) {
  setImageURL("img_gowbckgrnd", "gow-cover.jpg");
  setProperty("butt_clear_gow_1", "hidden", false);
  setProperty("text_desc_gow", "hidden", false);
  setProperty("img_gow_1", "hidden", true);
  setProperty("img_gow_2", "hidden", true);
  setProperty("img_gow_3", "hidden", true);
});
onEvent("butt_clear_gow_1", "click", function( ) {
  setImageURL("img_gowbckgrnd", "gow-cover.jpg");
  setProperty("butt_clear_gow_1", "hidden", true);
  setProperty("text_desc_gow", "hidden", true);
  setProperty("img_gow_1", "hidden", true);
  setProperty("img_gow_2", "hidden", true);
  setProperty("img_gow_3", "hidden", true);
});
onEvent("butt_ingame_gow", "click", function( ) {
  setImageURL("img_gowbckgrnd", "bluebackgroud.jpeg");
  setProperty("butt_clear_gow_1", "hidden", false);
  setProperty("text_desc_gow", "hidden", true);
  setImageURL("img_gow_1", "img-gow-1.jpg");
  setImageURL("img_gow_2", "img-gow-2.jpg");
  setImageURL("img_gow_3", "img-gow-3.jpg");
  setProperty("img_gow_1", "width", 300);
  setProperty("img_gow_1", "x", 10);
  setProperty("img_gow_2", "width", 300);
  setProperty("img_gow_3", "width", 300);
  setProperty("img_gow_3", "x", 10);
  setProperty("img_gow_1", "hidden", false);
  setProperty("img_gow_2", "hidden", false);
  setProperty("img_gow_3", "hidden", false);
});
onEvent("butt_vids_gow", "click", function( ) {
  setImageURL("img_gowbckgrnd", "bluebackgroud.jpeg");
  setProperty("butt_clear_gow_1", "hidden", false);
  setProperty("text_desc_gow", "hidden", true);
  setImageURL("img_gow_1", "img-gow-ytb-1.jpeg");
  setImageURL("img_gow_2", "img-gow-ytb-2.jpeg");
  setImageURL("img_gow_3", "img-gow-ytb-3.jpeg");
  setProperty("img_gow_1", "width", 175);
  setProperty("img_gow_1", "x", 135);
  setProperty("img_gow_2", "width", 175);
  setProperty("img_gow_3", "width", 175);
  setProperty("img_gow_3", "x", 135);
  setProperty("img_gow_1", "hidden", false);
  setProperty("img_gow_2", "hidden", false);
  setProperty("img_gow_3", "hidden", false);
});
onEvent("img_gow_1", "click", function( ) {
  if (getXPosition("img_gow_1") == 135) {
    open("https://youtu.be/CJ_GCPaKywg");
  }
});
onEvent("img_gow_2", "click", function( ) {
  if (getXPosition("img_gow_1") == 135) {
    open("https://youtu.be/VE1BfkKSsbI");
  }
});
onEvent("img_gow_3", "click", function( ) {
  if (getXPosition("img_gow_1") == 135) {
    open("https://youtu.be/-ElfuYmpO2k");
  }
});
setImageURL("img_rdr2bckgrnd", "rdr2-cover.jpg");
onEvent("butt_back_rdr2_1", "click", function( ) {
  stopSound("rdr2-theme.mp3");
  playSound("ps4-theme.mp3", true);
  setProperty("img_off_list", "hidden", false);
  setProperty("img_on_list", "hidden", true);
  setImageURL("img_rdr2bckgrnd", "rdr2-cover.jpg");
  setProperty("butt_clear_rdr2_1", "hidden", true);
  setProperty("text_desc_rdr2", "hidden", true);
  setScreen("screen_list");
  setProperty("img_rdr2_1", "hidden", true);
  setProperty("img_rdr2_2", "hidden", true);
  setProperty("img_rdr2_3", "hidden", true);
});
onEvent("img_off_rdr", "click", function( ) {
  setProperty("img_off_rdr", "hidden", true);
  setProperty("img_on_rdr", "hidden", false);
  stopSound("rdr2-theme.mp3");
});
onEvent("img_on_rdr", "click", function( ) {
  setProperty("img_off_rdr", "hidden", false);
  setProperty("img_on_rdr", "hidden", true);
  playSound("rdr2-theme.mp3", true);
});
onEvent("butt_desc_rdr2", "click", function( ) {
  setImageURL("img_rdr2bckgrnd", "rdr2-cover.jpg");
  setProperty("butt_clear_rdr2_1", "hidden", false);
  setProperty("text_desc_rdr2", "hidden", false);
  setProperty("img_rdr2_1", "hidden", true);
  setProperty("img_rdr2_2", "hidden", true);
  setProperty("img_rdr2_3", "hidden", true);
});
onEvent("butt_clear_rdr2_1", "click", function( ) {
  setImageURL("img_rdr2bckgrnd", "rdr2-cover.jpg");
  setProperty("butt_clear_rdr2_1", "hidden", true);
  setProperty("text_desc_rdr2", "hidden", true);
  setProperty("img_rdr2_1", "hidden", true);
  setProperty("img_rdr2_2", "hidden", true);
  setProperty("img_rdr2_3", "hidden", true);
});
onEvent("butt_ingame_rdr2", "click", function( ) {
  setImageURL("img_rdr2bckgrnd", "bluebackgroud.jpeg");
  setProperty("butt_clear_rdr2_1", "hidden", false);
  setProperty("text_desc_rdr2", "hidden", true);
  setImageURL("img_rdr2_1", "img-rdr2-2.jpg");
  setImageURL("img_rdr2_2", "img-rdr2-1.jpg");
  setImageURL("img_rdr2_3", "img-rdr2-3.jpg");
  setProperty("img_rdr2_1", "width", 300);
  setProperty("img_rdr2_2", "width", 300);
  setProperty("img_rdr2_2", "x", 10);
  setProperty("img_rdr2_3", "width", 300);
  setProperty("img_rdr2_1", "hidden", false);
  setProperty("img_rdr2_2", "hidden", false);
  setProperty("img_rdr2_3", "hidden", false);
});
onEvent("butt_vids_rdr2", "click", function( ) {
  setImageURL("img_rdr2bckgrnd", "bluebackgroud.jpeg");
  setProperty("butt_clear_rdr2_1", "hidden", false);
  setProperty("text_desc_rdr2", "hidden", true);
  setImageURL("img_rdr2_1", "img-rdr-ytb-1.jpeg");
  setImageURL("img_rdr2_2", "img-rdr-ytb-2.jpeg");
  setImageURL("img_rdr2_3", "img-rdr-ytb-3.jpeg");
  setProperty("img_rdr2_1", "width", 175);
  setProperty("img_rdr2_2", "width", 175);
  setProperty("img_rdr2_2", "x", 135);
  setProperty("img_rdr2_3", "width", 175);
  setProperty("img_rdr2_1", "hidden", false);
  setProperty("img_rdr2_2", "hidden", false);
  setProperty("img_rdr2_3", "hidden", false);
});
onEvent("img_rdr2_1", "click", function( ) {
  if (getXPosition("img_rdr2_2") == 135) {
    open("https://youtu.be/H7nLnWhaCk8");
  }
});
onEvent("img_rdr2_2", "click", function( ) {
  if (getXPosition("img_rdr2_2") == 135) {
    open("https://youtu.be/tCzNEzP0DNk");
  }
});
onEvent("img_rdr2_3", "click", function( ) {
  if (getXPosition("img_rdr2_2") == 135) {
    open("https://youtu.be/AvjWwMvaBNo");
  }
});
setImageURL("img_u4backgrnd", "u4-cover-2.jpg");
onEvent("butt_back_u4_1", "click", function( ) {
  stopSound("u4-theme.mp3");
  playSound("ps4-theme.mp3", true);
  setProperty("img_off_list", "hidden", false);
  setProperty("img_on_list", "hidden", true);
  setImageURL("img_u4backgrnd", "u4-cover-2.jpg");
  setProperty("butt_clear_u4", "hidden", true);
  setProperty("text_desc_u4", "hidden", true);
  setScreen("screen_list");
  setProperty("butt_desc_u4", "y", 365);
  setProperty("butt_ingame_u4", "y", 365);
  setProperty("butt_vids_u4", "y", 365);
  setProperty("img_u4_1", "hidden", true);
  setProperty("img_u4_2", "hidden", true);
  setProperty("img_u4_3", "hidden", true);
});
onEvent("img_off_u4", "click", function( ) {
  setProperty("img_off_u4", "hidden", true);
  setProperty("img_on_u4", "hidden", false);
  stopSound("u4-theme.mp3");
});
onEvent("img_on_u4", "click", function( ) {
  setProperty("img_off_u4", "hidden", false);
  setProperty("img_on_u4", "hidden", true);
  playSound("u4-theme.mp3", true);
});
onEvent("butt_desc_u4", "click", function( ) {
  setImageURL("img_u4backgrnd", "u4-cover-2.jpg");
  setProperty("butt_clear_u4", "hidden", false);
  setProperty("text_desc_u4", "hidden", false);
  setProperty("butt_desc_u4", "y", 365);
  setProperty("butt_ingame_u4", "y", 365);
  setProperty("butt_vids_u4", "y", 365);
  setProperty("img_u4_1", "hidden", true);
  setProperty("img_u4_2", "hidden", true);
  setProperty("img_u4_3", "hidden", true);
});
onEvent("butt_clear_u4", "click", function( ) {
  setImageURL("img_u4backgrnd", "u4-cover-2.jpg");
  setProperty("butt_clear_u4", "hidden", true);
  setProperty("text_desc_u4", "hidden", true);
  setProperty("butt_desc_u4", "y", 365);
  setProperty("butt_ingame_u4", "y", 365);
  setProperty("butt_vids_u4", "y", 365);
  setProperty("img_u4_1", "hidden", true);
  setProperty("img_u4_2", "hidden", true);
  setProperty("img_u4_3", "hidden", true);
});
onEvent("butt_ingame_u4", "click", function( ) {
  setImageURL("img_u4backgrnd", "bluebackgroud.jpeg");
  setProperty("butt_clear_u4", "hidden", false);
  setProperty("butt_desc_u4", "y", 425);
  setProperty("butt_ingame_u4", "y", 425);
  setProperty("butt_vids_u4", "y", 425);
  setProperty("text_desc_u4", "hidden", true);
  setImageURL("img_u4_1", "img-u4-1.jpg");
  setImageURL("img_u4_2", "img-u4-2.jpg");
  setImageURL("img_u4_3", "img-u4-3.jpg");
  setProperty("img_u4_1", "width", 300);
  setProperty("img_u4_1", "x", 10);
  setProperty("img_u4_2", "width", 300);
  setProperty("img_u4_3", "width", 300);
  setProperty("img_u4_3", "x", 10);
  setProperty("img_u4_1", "hidden", false);
  setProperty("img_u4_2", "hidden", false);
  setProperty("img_u4_3", "hidden", false);
});
onEvent("butt_vids_u4", "click", function( ) {
  setImageURL("img_u4backgrnd", "bluebackgroud.jpeg");
  setProperty("butt_clear_u4", "hidden", false);
  setProperty("butt_desc_u4", "y", 425);
  setProperty("butt_ingame_u4", "y", 425);
  setProperty("butt_vids_u4", "y", 425);
  setProperty("text_desc_u4", "hidden", true);
  setImageURL("img_u4_1", "img-u4-ytb-1.jpeg");
  setImageURL("img_u4_2", "img-u4-ytb-2.jpeg");
  setImageURL("img_u4_3", "img-u4-ytb-3.jpeg");
  setProperty("img_u4_1", "width", 175);
  setProperty("img_u4_1", "x", 135);
  setProperty("img_u4_2", "width", 175);
  setProperty("img_u4_3", "width", 175);
  setProperty("img_u4_3", "x", 135);
  setProperty("img_u4_1", "hidden", false);
  setProperty("img_u4_2", "hidden", false);
  setProperty("img_u4_3", "hidden", false);
});
onEvent("img_u4_1", "click", function( ) {
  if (getXPosition("img_u4_1") == 135) {
    open("https://youtu.be/d5nfXqffvyc");
  }
});
onEvent("img_u4_2", "click", function( ) {
  if (getXPosition("img_u4_1") == 135) {
    open("https://youtu.be/njTDpKLcLt8");
  }
});
onEvent("img_u4_3", "click", function( ) {
  if (getXPosition("img_u4_1") == 135) {
    open("https://youtu.be/4SdyfFTpmas");
  }
});
setImageURL("img_hzdbckgrnd", "hzd-cover.jpg");
onEvent("butt_back_hzd_1", "click", function( ) {
  stopSound("hzd-theme.mp3");
  playSound("ps4-theme.mp3", true);
  setProperty("img_off_list", "hidden", false);
  setProperty("img_on_list", "hidden", true);
  setImageURL("img_hzdbckgrnd", "hzd-cover.jpg");
  setProperty("butt_clear_hzd_1", "hidden", true);
  setProperty("text_desc_hzd", "hidden", true);
  setScreen("screen_list");
  setProperty("img_hzd_1", "hidden", true);
  setProperty("img_hzd_2", "hidden", true);
  setProperty("img_hzd_3", "hidden", true);
});
onEvent("img_off_hzd", "click", function( ) {
  setProperty("img_off_hzd", "hidden", true);
  setProperty("img_on_hzd", "hidden", false);
  stopSound("hzd-theme.mp3");
});
onEvent("img_on_hzd", "click", function( ) {
  setProperty("img_off_hzd", "hidden", false);
  setProperty("img_on_hzd", "hidden", true);
  playSound("hzd-theme.mp3", true);
});
onEvent("butt_desc_hzd", "click", function( ) {
  setImageURL("img_hzdbckgrnd", "hzd-cover.jpg");
  setProperty("butt_clear_hzd_1", "hidden", false);
  setProperty("text_desc_hzd", "hidden", false);
  setProperty("img_hzd_1", "hidden", true);
  setProperty("img_hzd_2", "hidden", true);
  setProperty("img_hzd_3", "hidden", true);
});
onEvent("butt_clear_hzd_1", "click", function( ) {
  setImageURL("img_hzdbckgrnd", "hzd-cover.jpg");
  setProperty("butt_clear_hzd_1", "hidden", true);
  setProperty("text_desc_hzd", "hidden", true);
  setProperty("img_hzd_1", "hidden", true);
  setProperty("img_hzd_2", "hidden", true);
  setProperty("img_hzd_3", "hidden", true);
});
onEvent("butt_ingame_hzd", "click", function( ) {
  setImageURL("img_hzdbckgrnd", "bluebackgroud.jpeg");
  setProperty("butt_clear_hzd_1", "hidden", false);
  setProperty("text_desc_hzd", "hidden", true);
  setImageURL("img_hzd_1", "img-hzd-1.jpg");
  setImageURL("img_hzd_2", "img-hzd-2.jpg");
  setImageURL("img_hzd_3", "img-hzd-3.jpeg");
  setProperty("img_hzd_1", "width", 300);
  setProperty("img_hzd_2", "width", 300);
  setProperty("img_hzd_2", "x", 10);
  setProperty("img_hzd_3", "width", 300);
  setProperty("img_hzd_1", "hidden", false);
  setProperty("img_hzd_2", "hidden", false);
  setProperty("img_hzd_3", "hidden", false);
});
onEvent("butt_vids_hzd", "click", function( ) {
  setImageURL("img_hzdbckgrnd", "bluebackgroud.jpeg");
  setProperty("butt_clear_hzd_1", "hidden", false);
  setProperty("text_desc_hzd", "hidden", true);
  setImageURL("img_hzd_1", "img-hzd-ytb-1.jpeg");
  setImageURL("img_hzd_2", "img-hzd-ytb-2.jpeg");
  setImageURL("img_hzd_3", "img-hzd-ytb-3.jpeg");
  setProperty("img_hzd_1", "width", 175);
  setProperty("img_hzd_2", "width", 175);
  setProperty("img_hzd_2", "x", 135);
  setProperty("img_hzd_3", "width", 175);
  setProperty("img_hzd_1", "hidden", false);
  setProperty("img_hzd_2", "hidden", false);
  setProperty("img_hzd_3", "hidden", false);
});
onEvent("img_hzd_1", "click", function( ) {
  if (getXPosition("img_hzd_2") == 135) {
    open("https://youtu.be/T5Xx3MdqdgM");
  }
});
onEvent("img_hzd_2", "click", function( ) {
  if (getXPosition("img_hzd_2") == 135) {
    open("https://youtu.be/7mSAAjaufu0");
  }
});
onEvent("img_hzd_3", "click", function( ) {
  if (getXPosition("img_hzd_2") == 135) {
    open("https://youtu.be/1ojVVoo_Fs4");
  }
});
