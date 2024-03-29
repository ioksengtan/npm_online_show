
function DynamicDisplay(mdppSet, DivSet, id) {


    if (mdppSet.length > 1) {
        switch (mdppSet[id].property) {
            case "ls":
                {

                    $.get(appResources,

                        {
                            "command": "commandGetSpecificTypeResources",
                            "ResourceType": mdppSet[id].data
                        },
                        function(data) {
                            //console.log(data);
                            var div_id = '#div' + id;
                            var tmp = data.split('||');

                            tmp.pop();
                            //console.log(tmp);
                            //var content = tmp.split('$$')[2];
                            //data.split('||')[2];
                            //tmp.pop();
                            var tmp_text = "";
                            //tmp_text += "@ls list<br/>";
                            //tmp_text += "=====<br/>";
                            tmp.forEach(item => {
                                var resource_name = item.split("$$")[3];
                                var resource_id = item.split("$$")[0];
                                var resource_FileID = item.split("$$")[1];
                                var resource_content = item.split("$$")[2];

                                tmp_text += resource_name + ':' + resource_content;
                                tmp_text += "</br>";
                            })
                            //tmp_text += "=====<br/>";

                            //var content = tmp.split('$$')[2];
                            $(div_id).html(tmp_text);

                        }
                    );
                    break;
                }
            case "list_ref":
                {
                    //console.log('dynamic list_ref');
                    $.get(appResources,

                        {
                            "command": "commandGetSpecificResourceByName",
                            "ResourceName": mdppSet[id].data
                        },
                        function(data) {
                            //console.log(data);
                            var div_id = '#div' + id;
                            //console.log(div_id);
                            var ls_ref_content = data.split('$$')[1];
                            //console.log(ls_ref_content);
                            var find = '\n';
                            var re = new RegExp(find, 'g');

                            ls_ref_content = ls_ref_content.replace(re, '<br/>');
                            //console.log(ls_ref_content);
                            $(div_id).html(ls_ref_content);

                        }
                    );
                    break;
                    break;
                }
            case "default":
                break;
        }
    }


}

function DivSet2StaticDisplay(mdppSet, DivSet, dp_element) {

    for (var i = 0; i < DivSet.length; i++) {

        switch (mdppSet[i].property) {
            case "markdown_input":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }

            case "u2b":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
                case "pdf":
                    {
                        var tmp_html_content = "";
                        tmp_html_content += '<div id="div' + i + '">'
                        tmp_html_content += DivSet[i];
                        tmp_html_content += '</div>'
                        dp_element.append(tmp_html_content);
                        break;
                    }
                case "mp3":
                    {
                        var tmp_html_content = "";
                        tmp_html_content += '<div id="div' + i + '">'
                        tmp_html_content += DivSet[i];
                        tmp_html_content += '</div>'
                        dp_element.append(tmp_html_content);
                        break;
                    }
            case "image":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
                case "jog":
                    {
                        var tmp_html_content = "";
                        tmp_html_content += '<div id="div' + i + '">'
                        tmp_html_content += DivSet[i];
                        tmp_html_content += '</div>'
                        dp_element.append(tmp_html_content);
                        break;
                    }
            case "image_rotation":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
            case "html":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
            case "ref":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div class="system_msg" id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
            case "ls":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div class="system_msg" id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
            case "ls_export":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
            case "list":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div class="system_msg" id="div' + i + '">';
                    tmp_html_content += string2html(DivSet[i]);
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
            case "menu":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">';
                    tmp_html_content += string2html(DivSet[i]);
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
            case "list_ref":
                {
                    //console.log('list_ref');
                    var tmp_html_content = "";
                    tmp_html_content += '<div class="system_msg" id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
            case "plot":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += DivSet[i];

                    //showPlot('2d', [variable_lib[var_x], variable_lib[var_y]], "div"+i);

                    var tmp_argument_set = mdppSet[i].data.split(" ");
                    var var_x_name = tmp_argument_set[1];
                    var var_y_name = tmp_argument_set[3];

                    var var_x_value = variable_manager.variable_objects[var_x_name];
                    var var_y_value = variable_manager.variable_objects[var_y_name];

                    if (typeof var_x_value == "undefined" | typeof var_y_value == "undefined") {
                        tmp_html_content += "!!! x undefined or y undefined, please check"
                        tmp_html_content += '</div>'
                        dp_element.append(tmp_html_content);
                    } else {
                        tmp_html_content += '</div>'
                        dp_element.append(tmp_html_content);
                        //console.log('x:'+var_x_name+',y:'+var_y_name);
                        //showPlot('2d', [[1,2,3], [3,4,5]], "#div"+i);
                        showPlot('2d', [var_x_value, var_y_value], "#div" + i);
                    }

                    break;
                }
            case "set":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    var var_name = mdppSet[i].data.replace(/ +/g, '').split('=')[0];
                    var var_value = mdppSet[i].data.replace(/ +/g, '').split('=')[1];
                    var new_var_x = {
                        'name': var_name,
                        'value': eval(var_value)
                    };
                    variable_manager.newVariable(new_var_x, display_var);
                    break;
                }
            case "print":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div class="system_msg" name='+mdppSet[i].data+' id="div' + i + '">'
                    //tmp_html_content += DivSet[i];
                    //tmp_html_content += '<br/>===<br/>';
                    tmp_html_content += variable_manager.variable_objects[mdppSet[i].data];
                    //tmp_html_content += '<br/>===<br/>';
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    //var var_name = mdppSet[i].data.replace(/ +/g,'').split('=')[0];
                    //var var_value = mdppSet[i].data.replace(/ +/g,'').split('=')[1];
                    //var new_var_x = {'name':var_name, 'value':eval(var_value)};
                    //variable_manager.newVariable(new_var_x, display_var);
                    break;
                }
            case "whos":
                {

                    var tmp_html_content = "";
                    tmp_html_content += '<div class="system_msg" id="div' + i + '">'
                    //tmp_html_content += DivSet[i];
                    tmp_html_content += variable_manager.listVariables();
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    //var var_name = mdppSet[i].data.replace(/ +/g,'').split('=')[0];
                    //var var_value = mdppSet[i].data.replace(/ +/g,'').split('=')[1];
                    //var new_var_x = {'name':var_name, 'value':eval(var_value)};
                    //variable_manager.newVariable(new_var_x, display_var);
                    break;
                }
            case "ui_slidebar":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += DivSet[i];
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    let var_name = mdppSet[i].data.split(' ')[1];

                    ui_manager.newSlidebar('#div' + i, var_name);
                    let new_var = {
                        'name': var_name,
                        'value': 50
                    };
                    variable_manager.newVariable(new_var, display_var);
                    break;
                }
            case "marked":
                {
                    var tmp_html_content = "";
                    tmp_html_content += '<div id="div' + i + '">'
                    tmp_html_content += '</div>'
                    dp_element.append(tmp_html_content);
                    break;
                }
        }

    }

}


function mdpp2DivSet(input_content) {
    variable_manager.clearVariables();
    var DivSet = [];
    [preprocessed_content, parse_result, mdppSet] = html_preprocessing(input_content);
    for (var i = 0; i < mdppSet.length; i++) {
        switch (mdppSet[i].property) {
            case "markdown_input":
                {
                    var html_results = markdown.toHTML(mdppSet[i].data);
                    DivSet.push(html_results);
                    break;
                }
            case "html":
                {
                    DivSet.push(mdppSet[i].data);
                    break;
                }
            case "u2b":
                {
                    DivSet.push(mdppSet[i].data);
                    break;
                }
                case "pdf":
                    {
                        var pdf_content = "<embed src= \"";
                        pdf_content += mdppSet[i].data;
                        pdf_content += "\" width= \"100%\" height=\"400\">";
                        DivSet.push(pdf_content);
                        break;
                    }
            case "ref":
                {
                    DivSet.push(mdppSet[i].data);
                    break;
                }
            case "list":
                {
                    DivSet.push(mdppSet[i].data);
                    break;
                }
            case "list_ref":
                {
                    DivSet.push("");
                    break;
                }
            case "menu":
                {
                    DivSet.push(mdppSet[i].data);
                    break;
                }
            case "ls":
                {
                    //console.log(mdppSet[i].data);

                    var ls_content = "[system message] syntax: ls [type]  : show all resources with specific type.<br/>"
                    ls_content += "loading...<br/>"
                    ls_content += mdppSet[i].data;
                    ls_content += "<br/>"
                    DivSet.push(ls_content);
                    break;
                }
            case "ls_export":
                {
                    //console.log(mdppSet[i].data);
                    DivSet.push("");
                    break;
                }
                case "mp3":
                    {
                        //console.log('image');
                        //var image_content = "<img src=\"https://drive.google.com/uc?export=view&id=";

                        //var mp3_content = "<audio controls><source src=\"https://drive.google.com/uc?export=view&id=";
                        var mp3_content = "<audio controls><source src=\"";
                        //var tmp_length_array = mdppSet[i].data.split("=").length;
                        mp3_content += mdppSet[i].data;
                        mp3_content += "\"  type=\"audio/ogg\">";
                        mp3_content += "</audio>"
                        //mp3_content += "<audio controls><source src=\"https://drive.google.com/uc?export=view&id=";
                        var mp3_content = "<audio controls><source src=\"";
                        var tmp_length_array = mdppSet[i].data.split("=").length;
                        //mp3_content += mdppSet[i].data.split("=")[tmp_length_array - 1];
                        mp3_content += mdppSet[i].data;
                        mp3_content += "\"  type=\"audio/mpeg\">";
                        mp3_content += "</audio>"
                        DivSet.push(mp3_content);
                        break;
                    }
                  case "image":
                {
                    //console.log('image');
                    //var image_content = "<img src=\"https://drive.google.com/uc?export=view&id=";

                    var image_content = "<img class=\"rotation\" src=\"https://drive.google.com/uc?export=view&id=";
                    var tmp_length_array = mdppSet[i].data.split("=").length;
                    image_content += mdppSet[i].data.split("=")[tmp_length_array - 1];
                    image_content += "\">";
                    DivSet.push(image_content);
                    break;
                }
            case "image_rotation":
                {
                    console.log(mdppSet[i].data);
                    //var image_content = "<img src=\"https://drive.google.com/uc?export=view&id=";
                    var rotation_degrees = mdppSet[i].data.split(' ')[1];
                    var image_content = "<img class=\"rotation" + rotation_degrees + "\" src=\"https://drive.google.com/uc?export=view&id=";
                    var tmp_length_array = mdppSet[i].data.split(' ')[0].split("=").length;
                    image_content += mdppSet[i].data.split(' ')[0].split("=")[tmp_length_array - 1];
                    image_content += "\">";

                    //console.log(rotation_degrees);
                    //console.log(image_content);
                    DivSet.push(image_content);
                    break;
                }
            case "flowchart":
                {
                    var tmp = mdppSet[i].data;
                    var diagram = flowchart.parse(tmp);
                    $('#diagram').html('');
                    //diagram.drawSVG('diagram');

                    DivSet.push($('#diagram').html());
                    break;
                }
            case "plot":
                {
                    var plot_content = "";
                    plot_content += "@plot\n"
                    plot_content += mdppSet[i].data;
                    DivSet.push(plot_content);
                    break;
                }
            case "set":
                {
                    var set_content = "";
                    set_content += "@set\n"
                    set_content += mdppSet[i].data;
                    DivSet.push(set_content);
                    break;
                }
                case "jog":
                    {
                        var jog_content = "";
                        jog_content += "@jog\n"
                        jog_content += mdppSet[i].data;
                        DivSet.push(jog_content);
                        break;
                    }
            case "print":
                {
                    var print_content = "";
                    print_content += "@print\n"
                    print_content += mdppSet[i].data;
                    DivSet.push(print_content);
                    break;
                }
            case "whos":
                {
                    var whos_content = "";
                    whos_content += "@whos\n"
                    whos_content += mdppSet[i].data;
                    DivSet.push(whos_content);
                    break;
                }
            case "ui_slidebar":
                {
                    var ui_slidebar_content = "";
                    ui_slidebar_content += "@ui_slidebar\n"
                    ui_slidebar_content += mdppSet[i].data;
                    DivSet.push(ui_slidebar_content);
                    break;
                }
            case "marked":
                {
                    var marked_content = "";
                    //marked_content+= mdppSet[i].data;
                    DivSet.push(marked_content);
                    break;
                }
        }
    }
    return [mdppSet, DivSet];

}
function md2html(input_content) {


      preview = "";
      //content = input.value;
      content = input_content;
      //console.log(content);
      [preprocessed_content, parse_result, StringSet] = html_preprocessing(content);

      debug = StringSet;
      for(var i=0;i<StringSet.length;i++){
      switch(StringSet[i].property){
        case "markdown_input":{
          //console.log("markdown_input");
      //					console.log(StringSet[i].data);
          var html_results = markdown.toHTML(StringSet[i].data);
          preview += html_results;
          break;
        }
				case "image":{
					preview+= "<p><img src=\"" + StringSet[i].data +"\" /></p>";
					break;
				}
        case "system_cmd":{
          //console.log("system_cmd");
          break;
        }
        case "html":{
          //console.log("html");
      //					console.log(StringSet[i].data);
          preview += StringSet[i].data;

          break;
        }
        case "u2b":{
          preview += StringSet[i].data;
          break;
        }
      }
      }
      return preview;
}

function string2html(string_input) {
    var html_output = "";
    html_output += string_input.replace(/\n/g, '<br/>');
    return html_output;
}
function parse_data(data){
  console.log(data);
  var npc_sets = [];

  for(i=0;i<data.length;i++){
	console.log(i);
          tmp_npc = {}
          tmp_npc.npc_id = data[i].npc_id; 
          tmp_npc.npc_description= data[i].npc_description; 
          tmp_npc.type = data[i].type; 
          tmp_npc.path = data[i].path; 
          tmp_npc.range = data[i].range;
          tmp_npc.path_end_x = data[i].path_end_x; 
          tmp_npc.path_end_y = data[i].path_end_y;
          tmp_npc.offset_x = data[i].offset_x ;
          tmp_npc.offset_y = data[i].offset_y ;
          tmp_npc.map_offset_x = data[i].map_offset_x; 
          tmp_npc.map_offset_y = data[i].map_offset_y; 
          tmp_npc.event_type = data[i].event_type; 
          tmp_dialog_str = data[i].dialog 
	  //console.log(tmp_dialog_str);
          tmp_npc.dialog = {}
	  console.log(tmp_dialog_str);
          tmp_npc.dialog.raw = tmp_dialog_str.split('@rpg')
          tmp_npc.dialog.raw.shift()
          tmp_npc.dialog.html = [];
          tmp_npc.dialog.type = []
	  tmp_npc.dialog.type_argument = [];
          tmp_dialog = {}
          tmp_dialog.type = [];		  
          tmp_dialog.html = [];
          for(j=0;j<tmp_npc.dialog.raw.length;j++){
		tmp_type_str = tmp_npc.dialog.raw[j].split('\n')[1].split(' ');				
                tmp_npc.dialog.type.push(tmp_type_str[1]);
		tmp_npc.dialog.type_argument.push(tmp_type_str[2]);
                tmp_npc.dialog.html.push(md2html(tmp_npc.dialog.raw[j]))
          }
          npc_sets.push(tmp_npc)
  }
  return npc_sets
}


function parse_data_bak(data){
  var npc_sets = [];
  tmp_npc_string_set = data.split('||');
  tmp_npc_string_set.pop()
  for(i=0;i<tmp_npc_string_set.length;i++){
          tmp_npc = {}
          tmp_npc.npc_id = tmp_npc_string_set[i].split('$$')[0]
          tmp_npc.npc_description= tmp_npc_string_set[i].split('$$')[1]
          tmp_npc.type = tmp_npc_string_set[i].split('$$')[2]
          tmp_npc.path = tmp_npc_string_set[i].split('$$')[3]
          tmp_npc.range = tmp_npc_string_set[i].split('$$')[4]
          tmp_npc.path_end_x = tmp_npc_string_set[i].split('$$')[5]
          tmp_npc.path_end_y = tmp_npc_string_set[i].split('$$')[6]
          tmp_npc.offset_x = tmp_npc_string_set[i].split('$$')[7]
          tmp_npc.offset_y = tmp_npc_string_set[i].split('$$')[8]
          tmp_npc.map_offset_x = tmp_npc_string_set[i].split('$$')[9]
          tmp_npc.map_offset_y = tmp_npc_string_set[i].split('$$')[10]
          tmp_npc.event_type = tmp_npc_string_set[i].split('$$')[11]
          tmp_dialog_str = tmp_npc_string_set[i].split('$$')[12]
          tmp_npc.dialog = {}
          tmp_npc.dialog.raw = tmp_npc_string_set[i].split('$$')[12].split('@rpg')
          tmp_npc.dialog.raw.shift()
          tmp_npc.dialog.html = [];
          tmp_npc.dialog.type = []
		  tmp_npc.dialog.type_argument = [];
          tmp_dialog = {}
          tmp_dialog.type = [];		  
          tmp_dialog.html = [];
          for(j=0;j<tmp_npc.dialog.raw.length;j++){
				tmp_type_str = tmp_npc.dialog.raw[j].split('\n')[1].split(' ');				
                tmp_npc.dialog.type.push(tmp_type_str[1]);
				tmp_npc.dialog.type_argument.push(tmp_type_str[2]);
                tmp_npc.dialog.html.push(md2html(tmp_npc.dialog.raw[j]))
          }
          npc_sets.push(tmp_npc)
  }
  return npc_sets
}
