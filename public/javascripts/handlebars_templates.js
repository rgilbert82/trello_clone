this["JST"] = this["JST"] || {};

this["JST"]["add_board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"board_selector_container\"><h2>Create new board...</h2><div id=\"create_board_menu\"><h3>Create board</h3><a href=\"#\"><span><div class=\"cross_x\"></div></span></a><form action=\"\" method=\"post\"><label for=\"new_list_title\">Title</label><input type=\"text\" name=\"new_list_title\" id=\"new_list_title\" placeholder=\"What are you planning?\"/><input type=\"submit\" value=\"Create\" /></form></div></div>";
},"useData":true});

this["JST"]["add_list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"add_list_item_wrapper\"><a href=\"#\" id=\"add_list_title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a><form action=\"\" method=\"post\"><input type=\"text\" name=\"new_list_title\" id=\"new_list_title\" placeholder=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" /><div id=\"add_list_submit_or_cancel\"><input type=\"submit\" value=\"Save\" /><div id=\"cancel_add_list\"><a href=\"#\"><span><div class=\"cross_x\"></div></span></a></div></div></form></div>";
},"useData":true});

this["JST"]["archive_all_cards"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div><div class=\"close_modal_layer\"></div></div><div class=\"board_options archive_all_cards_modal\"><form action=\"\" method=\"post\"><h3>Archive All Cards</h3><a class=\"x_out_card_options_window\"><span><div class=\"cross_x\"></div></span></a><h4>Are you sure you want to archive all these cards?</h4><input type=\"submit\" value=\"Archive\" /></form></div>";
},"useData":true});

this["JST"]["board_selection"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=starred_boards><div class=\"board_selection_header\"><div id=\"star_icon_selection\" class=\"board_selection_header_button\"><span></span></div><div class=\"board_selection_title board_selection_header_button\"><h1>Starred Boards</h1></div></div><section class=\"boards_wrapper\"><ul id=\"starred_boards_list\"></ul></section></div><div id=personal_boards><div class=\"board_selection_header\"><div id=\"person_icon\" class=\"board_selection_header_button\"><span></span></div><div class=\"board_selection_title board_selection_header_button\"><h1>Personal Boards</h1></div></div><section class=\"boards_wrapper\"><ul id=\"personal_boards_list\"></ul></section></div>";
},"useData":true});

this["JST"]["board_selector"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\"><img src=\"../images/star_icon_yellow.png\" /></a>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\"><img src=\"../images/star_icon.png\" /></a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input data-board_id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" hidden /><div class=\"board_selector_container\"><div class=\"board_title board_selector_header_div\"><h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1></div><div class=\"header_selector_star_icon board_selector_header_div\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.starred : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div></div>";
},"useData":true});

this["JST"]["board"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "starred";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input id=\"hidden_board_input\" data-board_id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" hidden /><section class=\"lists_wrapper\"><div id=\"board_header\"><div id=\"board_title\" class=\"board_header_button\"><a href=\"#\"><h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1></a></div><div id=\"star_icon\" class=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.starred : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " board_header_button\"><a href=\"#\"><span></span></a></div><div id=\"show_menu\" class=\"board_header_button\"><a href=\"#\"><span>Show Menu</span></a></div></div><div id=\"lists\"><div id=\"lists_container\" class=\"lists_container\"></div></div></section>";
},"useData":true});

this["JST"]["card_window"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"card_content_labels\"><h3>Labels</h3><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></div>";
},"2":function(container,depth0,helpers,partials,data) {
    return "<li class=\"modal_opener card_content_label label_"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\"></li>";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"card_content_date\"><h3>Due Date</h3>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.dueDateHighlighted : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"due_date_toggle highlighted_dueDate\"><img src=\"../images/checkbox_checked.png\" width=\"14px\"/><span class=\"modal_opener\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dueDate : depth0)) != null ? stack1.date : stack1), depth0))
    + " at "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dueDate : depth0)) != null ? stack1.time : stack1), depth0))
    + "</span></div>";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"due_date_toggle\"><img src=\"../images/checkbox_unchecked.png\" width=\"14px\"/><span class=\"modal_opener\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dueDate : depth0)) != null ? stack1.date : stack1), depth0))
    + " at "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dueDate : depth0)) != null ? stack1.time : stack1), depth0))
    + "</span></div>";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"edit_description_header\"><h3>Description <a class=\"open_edit_description\" href=\"#\">Edit</a></h3><p>"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"description","hash":{},"data":data}) : helper)))
    + "</p></div>";
},"11":function(container,depth0,helpers,partials,data) {
    return "<div class=\"edit_description_header\"><img src=\"../images/activity_icon_1.png\" width=\"12px\" /><a class=\"open_edit_description\" href=\"#\">Edit the description...</a></div>";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "<li><div class=\"initial_box initial_box_small\">RG</div><div class=\"activity_description "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.comment : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><h2>Ryan Gilbert</h2><h4>"
    + ((stack1 = alias1((depth0 != null ? depth0.description : depth0), depth0)) != null ? stack1 : "")
    + "</h4><span>"
    + container.escapeExpression(alias1((depth0 != null ? depth0.dateTime : depth0), depth0))
    + "</span></div></li>";
},"14":function(container,depth0,helpers,partials,data) {
    return "activity_description_comment";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input class=\"hidden_card_input\" data-card_id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-list_id=\""
    + alias4(((helper = (helper = helpers.listID || (depth0 != null ? depth0.listID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listID","hash":{},"data":data}) : helper)))
    + "\" hidden /><div id=\"gray_layer\"></div><div id=\"card_window\"><div id=\"card_window_content\"><div id=\"card_main_content\"><div class=\"card_section_header\"><img src=\"../images/card_icon.png\" width=\"18px\"/><h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1></div><h3>in list <a href=\"#\">"
    + alias4(((helper = (helper = helpers.listTitle || (depth0 != null ? depth0.listTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listTitle","hash":{},"data":data}) : helper)))
    + "</a></h3>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dueDate : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div id=\"card_content_description\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "<form action=\"\" method=\"post\"><textarea name=\"description_field\" id=\"description_field\" required>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea><div id=\"add_list_submit_or_cancel\"><input type=\"submit\" value=\"Save\" /><div id=\"save_card_description\"><a href=\"#\"><span><div class=\"cross_x\"></div></span></a></div></div></form></div></div><div id=\"card_add_comment\"><div class=\"card_section_header\"><img src=\"../images/comment_icon.png\" width=\"18px\"/><h1>Add Comment</h1></div><div class=\"initial_box\">"
    + alias4(((helper = (helper = helpers.initials || (depth0 != null ? depth0.initials : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"initials","hash":{},"data":data}) : helper)))
    + "</div><form><textarea id=\"comment_textarea\" name=\"comment\" placeholder=\"Write a comment...\" required></textarea><input type=\"submit\" value=\"Send\" /></form></div><div id=\"card_activity\"><div class=\"card_section_header\"><img src=\"../images/activity_icon_2.png\" width=\"18px\"/><h1>Activity</h1><a href=\"#\">Hide Details</a></div><ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.activity : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></div></div><div id=\"card_window_sidebar\"><h1>Add</h1><ul class=\"modal_opener\"><li class=\"card_labels_button\"><img src=\"../images/label_icon.png\" width=\"12px\"/><img src=\"../images/label_icon_white.png\" width=\"12px\"/><h2>Labels</h2></li><li class=\"card_due_date_button\"><img src=\"../images/clock_icon_gray.png\" width=\"12px\"/><img src=\"../images/clock_icon_white.png\" width=\"12px\"/><h2>Due Date</h2></li></ul><h1>Actions</h1><ul class=\"modal_opener\"><li class=\"move_card_button\"><img src=\"../images/move_icon_thin.png\" width=\"12px\"/><img src=\"../images/move_icon_thin_white.png\" width=\"12px\"/><h2>Move</h2></li><li class=\"copy_card_button\"><img src=\"../images/card_icon.png\" width=\"12px\"/><img src=\"../images/card_icon_white.png\" width=\"12px\"/><h2>Copy</h2></li><li class=\"archive_card_button\"><img src=\"../images/archive_icon.png\" width=\"12px\"/><img src=\"../images/archive_icon_white.png\" width=\"12px\"/><h2>Archive</h2></li></ul></div><div id=\"x_out_card_window\"><span><div class=\"cross_x\"></div></span></div></div>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"card_selector_labels\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"2":function(container,depth0,helpers,partials,data) {
    return "<div class=\"card_selector_label label_"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\"></div>";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"card_selector_icon card_selector_date_icon "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dueDateHighlighted : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dueDateHighlighted : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "<span>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.dueDate : depth0)) != null ? stack1.date : stack1), depth0))
    + "</span></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return "highlighted_date";
},"7":function(container,depth0,helpers,partials,data) {
    return "<img height=\"12px\" width=\"12px\" src=\"../images/clock_icon_white.png\" />";
},"9":function(container,depth0,helpers,partials,data) {
    return "<img height=\"12px\" width=\"12px\" src=\"../images/clock_icon_gray.png\" />";
},"11":function(container,depth0,helpers,partials,data) {
    return "<div class=\"card_selector_icon card_selector_activity_icon\"><img height=\"12px\" width=\"12px\" src=\"../images/activity_icon_1.png\" /></div>";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"card_selector_icon card_selector_comments_icon\"><img height=\"12px\" width=\"12px\" src=\"../images/comment_icon.png\" /><span>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.comments : depth0)) != null ? stack1.length : stack1), depth0))
    + "</span></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input class=\"hidden_card_selector_input\" data-card_id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-list_id=\""
    + alias4(((helper = (helper = helpers.listID || (depth0 != null ? depth0.listID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listID","hash":{},"data":data}) : helper)))
    + "\" hidden />"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3><div class=\"card_selector_icons\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dueDate : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.activity : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["JST"]["copy_list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div><div class=\"close_modal_layer\"></div></div><div class=\"board_options copy_list_modal\"><form action=\"\" method=\"post\"><h3>Copy List</h3><a class=\"x_out_card_options_window\"><span><div class=\"cross_x\"></div></span></a><h2>Name</h2><textarea id=\"copy_list_textarea\" name=\"title\"></textarea><input type=\"submit\" value=\"Create List\" /></form></div>";
},"useData":true});

this["JST"]["create_board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div><div class=\"close_modal_layer\"></div></div><div class=\"board_options add_board_from_header\"><form action=\"\" method=\"post\"><h3>Create Board</h3><a class=\"x_out_card_options_window\"><span><div class=\"cross_x\"></div></span></a><input type=\"text\" id=\"new_board_title_choice\" name=\"title\" autocomplete=\"off\" placeholder=\"Name your new board...\" required /><input type=\"submit\" value=\"Save\" /></form></div>";
},"useData":true});

this["JST"]["edit_card_due_date"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"card_options card_due_date\"><form action=\"\" method=\"post\"><h3>Due Date</h3><a class=\"x_out_card_options_window\"><span><div class=\"cross_x\"></div></span></a><div class=\"select_month dropdown\"><span class=\"category_span\">Month</span><span class=\"title_span\"></span><select id=\"month_dropdown_select\" name=\"month\" class=\"month_dropdown\"><optgroup label=\"Month\"><option data-days=\"31\">January</option><option data-days=\"28\">February</option><option data-days=\"31\">March</option><option data-days=\"30\">April</option><option data-days=\"31\">May</option><option data-days=\"30\">June</option><option data-days=\"31\">July</option><option data-days=\"31\">August</option><option data-days=\"30\">September</option><option data-days=\"31\">October</option><option data-days=\"30\">November</option><option data-days=\"31\">December</option></optgroup></select></div><div class=\"select_day dropdown\"><span class=\"category_span\">Day</span><span class=\"title_span\"></span><select id=\"day_dropdown_select\" name=\"day\" class=\"day_dropdown\"><optgroup label=\"Day\"></optgroup></select></div><div class=\"select_time dropdown\"><span class=\"category_span\">Time</span><span class=\"title_span\"></span><select id=\"time_dropdown_select\" name=\"time\" class=\"time_dropdown\"><optgroup label=\"Time\"><option>12:00 AM</option><option>01:00 AM</option><option>02:00 AM</option><option>03:00 AM</option><option>04:00 AM</option><option>05:00 AM</option><option>06:00 AM</option><option>07:00 AM</option><option>08:00 AM</option><option>09:00 AM</option><option>10:00 AM</option><option>11:00 AM</option><option>12:00 PM</option><option>01:00 PM</option><option>02:00 PM</option><option>03:00 PM</option><option>04:00 PM</option><option>05:00 PM</option><option>06:00 PM</option><option>07:00 PM</option><option>08:00 PM</option><option>09:00 PM</option><option>10:00 PM</option><option>11:00 PM</option></optgroup></select></div><input type=\"submit\" value=\"Save\" /><input type=\"reset\" value=\"Remove\" /></form></div>";
},"useData":true});

this["JST"]["edit_card_labels"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"card_options label_card\"><form action=\"\" method=\"post\"><h3>Labels</h3><a class=\"x_out_card_options_window\"><span><div class=\"cross_x\"></div></span></a><ul><li><div class=\"label_yellow\"><span></span></div><div class=\"label_yellow\"><input type=\"checkbox\" "
    + alias3((helpers.isInArray || (depth0 && depth0.isInArray) || alias2).call(alias1,"yellow",(depth0 != null ? depth0.labels : depth0),{"name":"isInArray","hash":{},"data":data}))
    + "/><img src=\"../images/checkmark_icon.png\" height=\"34px\" width=\"34px\"/></div></li><li><div class=\"label_orange\"><span></span></div><div class=\"label_orange\"><input type=\"checkbox\" "
    + alias3((helpers.isInArray || (depth0 && depth0.isInArray) || alias2).call(alias1,"orange",(depth0 != null ? depth0.labels : depth0),{"name":"isInArray","hash":{},"data":data}))
    + "/><img src=\"../images/checkmark_icon.png\" height=\"34px\" width=\"34px\"/></div></li><li><div class=\"label_red\"><span></span></div><div class=\"label_red\"><input type=\"checkbox\" "
    + alias3((helpers.isInArray || (depth0 && depth0.isInArray) || alias2).call(alias1,"red",(depth0 != null ? depth0.labels : depth0),{"name":"isInArray","hash":{},"data":data}))
    + "/><img src=\"../images/checkmark_icon.png\" height=\"34px\" width=\"34px\"/></div></li><li><div class=\"label_purple\"><span></span></div><div class=\"label_purple\"><input type=\"checkbox\" "
    + alias3((helpers.isInArray || (depth0 && depth0.isInArray) || alias2).call(alias1,"purple",(depth0 != null ? depth0.labels : depth0),{"name":"isInArray","hash":{},"data":data}))
    + "/><img src=\"../images/checkmark_icon.png\" height=\"34px\" width=\"34px\"/></div></li><li><div class=\"label_blue\"><span></span></div><div class=\"label_blue\"><input type=\"checkbox\" "
    + alias3((helpers.isInArray || (depth0 && depth0.isInArray) || alias2).call(alias1,"blue",(depth0 != null ? depth0.labels : depth0),{"name":"isInArray","hash":{},"data":data}))
    + "/><img src=\"../images/checkmark_icon.png\" height=\"34px\" width=\"34px\"/></div></li><li><div class=\"label_green\"><span></span></div><div class=\"label_green\"><input type=\"checkbox\" "
    + alias3((helpers.isInArray || (depth0 && depth0.isInArray) || alias2).call(alias1,"green",(depth0 != null ? depth0.labels : depth0),{"name":"isInArray","hash":{},"data":data}))
    + "/><img src=\"../images/checkmark_icon.png\" height=\"34px\" width=\"34px\"/></div></li></ul></form></div>";
},"useData":true});

this["JST"]["edit_copy_card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<h4>Keep...</h4>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<label><input type=\"checkbox\" name=\"labels\" id=\"copy_card_labels\" checked/>Labels<strong>("
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.labels : depth0)) != null ? stack1.length : stack1), depth0))
    + ")</strong></label>";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<label><input type=\"checkbox\" name=\"comments\" id=\"copy_card_comments\" checked />Comments<strong>("
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.comments : depth0)) != null ? stack1.length : stack1), depth0))
    + ")</strong></label>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"card_options copy_card\"><form action=\"\" method=\"post\"><h3>Copy Card</h3><a class=\"x_out_card_options_window\"><span><div class=\"cross_x\"></div></span></a><h4>Title</h4><textarea name=\"title\" id=\"copy_card_title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<h4>Copy To...</h4><div class=\"select_board dropdown\"><span class=\"category_span\">Board</span><span class=\"title_span\"></span><select id=\"boards_dropdown_select\" name=\"board\" class=\"boards_dropdown\"><optgroup label=\"Boards\"></optgroup></select></div><div class=\"select_list dropdown\"><span class=\"category_span\">List</span><span class=\"title_span\"></span><select id=\"lists_dropdown_select\" name=\"list\" class=\"lists_dropdown\"><optgroup label=\"Lists\"></optgroup></select></div><div class=\"select_position dropdown\"><span class=\"category_span\">Position</span><span class=\"title_span\"></span><select id=\"positions_dropdown_select\" name=\"position\" class=\"positions_dropdown\"><optgroup label=\"Positions\"></optgroup></select></div><input type=\"submit\" value=\"Create Card\" /></form></div>";
},"useData":true});

this["JST"]["edit_move_card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"card_options move_card\"><form action=\"\" method=\"post\"><h3>Move Card</h3><a class=\"x_out_card_options_window\"><span><div class=\"cross_x\"></div></span></a><div class=\"select_board dropdown\"><span class=\"category_span\">Board</span><span class=\"title_span\"></span><select id=\"boards_dropdown_select\" name=\"board\" class=\"boards_dropdown\"><optgroup label=\"Boards\"></optgroup></select></div><div class=\"select_list dropdown\"><span class=\"category_span\">List</span><span class=\"title_span\"></span><select id=\"lists_dropdown_select\" name=\"list\" class=\"lists_dropdown\"><optgroup label=\"Lists\"></optgroup></select></div><div class=\"select_position dropdown\"><span class=\"category_span\">Position</span><span class=\"title_span\"></span><select id=\"positions_dropdown_select\" name=\"position\" class=\"positions_dropdown\"><optgroup label=\"Positions\"></optgroup></select></div><input type=\"submit\" value=\"Move\" /></form></div>";
},"useData":true});

this["JST"]["list_options"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div><div class=\"close_modal_layer\"></div></div><div class=\"board_options notifications_modal\"><form action=\"\" method=\"post\"><h3>List Actions</h3><a class=\"x_out_card_options_window\"><span><div class=\"cross_x\"></div></span></a><div class=\"list_option_category\"><a href=\"#\" id=\"list_option_add_card\">Add Card...</a><a href=\"#\" id=\"list_option_copy_list\">Copy List...</a><a href=\"#\" id=\"list_option_move_list\">Move List...</a></div><span class=\"border_span\"></span><div class=\"list_option_category\"><a href=\"#\" id=\"list_option_move_all_cards\">Move All Cards in This List...</a><a href=\"#\" id=\"list_option_archive_all_cards\">Archive All Cards in This List...</a></div><span class=\"border_span\"></span><div class=\"list_option_category\"><a href=\"#\" id=\"list_option_archive_list\">Archive This List</a></div></form></div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"list_item_wrapper\"><input class=\"hidden_list_input\" data-list_id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" hidden /><div class=\"list_header\"><div><a href=\"#\" class=\"list_header_title\"><h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2></a><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" hidden /></div><div class=\"ellipsis_icon list_header_button\"><a href=\"#\"><span class=\"ellipsis_icon_list_options\"></span></a></div></div><div class=\"cards\"><ul class=\"card_selector_list\" data-list_id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></ul></div><div class=\"list_footer\"><a class=\"footer_add_a_card\" href=\"#\">Add a card...</a><form class=\"add_new_card_form\" action=\"\" method=\"post\"><textarea id=\"new_card_title\" name=\"new_card_title\"></textarea><div id=\"add_card_submit_or_cancel\"><input type=\"submit\" value=\"Save\" /><div id=\"cancel_add_card\"><a href=\"#\"><span><div class=\"cross_x\"></div></span></a></div><a class=\"add_card_ellipsis\" href=\"#\"><img src=\"../images/ellipsis_icon_large.png\" height=\"30px\" width=\"30px\"/></a></div></form></div></div>";
},"useData":true});

this["JST"]["menu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "<div class=\"activity_item\"><div class=\"initials_sidebar\"><div class=\"initial_box initial_box_small\">RG</div></div><div class=\"activity_description "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.comment : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><h2>Ryan Gilbert</h2><h4>"
    + ((stack1 = alias1((depth0 != null ? depth0.description : depth0), depth0)) != null ? stack1 : "")
    + "</h4><span>"
    + container.escapeExpression(alias1((depth0 != null ? depth0.dateTime : depth0), depth0))
    + "</span></div></div>";
},"2":function(container,depth0,helpers,partials,data) {
    return "activity_description_comment";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div><div class=\"close_modal_layer\"></div></div><div class=\"board_options menu_activity\"><form action=\"\" method=\"post\"><h3>Activity</h3><a class=\"x_out_card_options_window\"><span><div class=\"cross_x\"></div></span></a><div id=\"all_activity\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.activity : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></form></div>";
},"useData":true});

this["JST"]["move_all_cards"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div><div class=\"close_modal_layer\"></div></div><div class=\"board_options move_all_cards_modal\"><form action=\"\" method=\"post\"><h3>Move All Cards</h3><a class=\"x_out_card_options_window\"><span><div class=\"cross_x\"></div></span></a><div class=\"select_list_list dropdown\"><span class=\"category_span\">List</span><span class=\"title_span\"></span><select id=\"lists_dropdown_select\" name=\"list\" class=\"lists_dropdown\"><optgroup label=\"Lists\"></optgroup></select></div><input type=\"submit\" value=\"Move Cards\" /></form></div>";
},"useData":true});

this["JST"]["move_list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div><div class=\"close_modal_layer\"></div></div><div class=\"board_options move_list_modal\"><form action=\"\" method=\"post\"><h3>Move List</h3><a class=\"x_out_card_options_window\"><span><div class=\"cross_x\"></div></span></a><div class=\"select_list_board dropdown\"><span class=\"category_span\">Board</span><span class=\"title_span\"></span><select id=\"boards_dropdown_select\" name=\"board\" class=\"boards_dropdown\"><optgroup label=\"Boards\"></optgroup></select></div><div class=\"select_list_position dropdown\"><span class=\"category_span\">Position</span><span class=\"title_span\"></span><select id=\"positions_dropdown_select\" name=\"position\" class=\"positions_dropdown\"><optgroup label=\"Positions\"></optgroup></select></div><input type=\"submit\" value=\"Move List\" /></form></div>";
},"useData":true});

this["JST"]["notifications"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div><div class=\"close_modal_layer\"></div></div><div class=\"board_options notifications_modal\"><form action=\"\" method=\"post\"><h3>Notifications</h3><a class=\"x_out_card_options_window\"><span><div class=\"cross_x\"></div></span></a><h1>No Notifications</h1></form></div>";
},"useData":true});

this["JST"]["search_result"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input class=\"hidden_search_results_input\" data-card_id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-board_id=\""
    + alias4(((helper = (helper = helpers.boardID || (depth0 != null ? depth0.boardID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"boardID","hash":{},"data":data}) : helper)))
    + "\" hidden /><a href=\"#\"><h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3></a><h4>in <strong>"
    + alias4(((helper = (helper = helpers.listTitle || (depth0 != null ? depth0.listTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listTitle","hash":{},"data":data}) : helper)))
    + "</strong> on <strong>"
    + alias4(((helper = (helper = helpers.boardTitle || (depth0 != null ? depth0.boardTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"boardTitle","hash":{},"data":data}) : helper)))
    + "</strong></h4>";
},"useData":true});