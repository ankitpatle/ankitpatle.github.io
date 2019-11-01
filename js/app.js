var Template = "";
Template += "{ {DataX00}, {DataX01}, {DataX02}, {DataX03}, {DataX04}, {DataX05}, {DataX06}, {DataX07}},\n";
Template += "{ {DataX10}, {DataX11}, {DataX12}, {DataX13}, {DataX14}, {DataX15}, {DataX16}, {DataX17}},\n";
Template += "{ {DataX20}, {DataX21}, {DataX22}, {DataX23}, {DataX24}, {DataX25}, {DataX26}, {DataX27}},\n";
Template += "{ {DataX30}, {DataX31}, {DataX32}, {DataX33}, {DataX34}, {DataX35}, {DataX36}, {DataX37}},\n";
Template += "{ {DataX40}, {DataX41}, {DataX42}, {DataX43}, {DataX44}, {DataX45}, {DataX46}, {DataX47}},\n";
Template += "{ {DataX50}, {DataX51}, {DataX52}, {DataX53}, {DataX54}, {DataX55}, {DataX56}, {DataX57}},\n";
Template += "{ {DataX60}, {DataX61}, {DataX62}, {DataX63}, {DataX64}, {DataX65}, {DataX66}, {DataX67}},\n";
Template += "{ {DataX70}, {DataX71}, {DataX72}, {DataX73}, {DataX74}, {DataX75}, {DataX76}, {DataX77}}\n";

function binaryToHex(s) {
    var i, k, part, accum, ret = '';
    for (i = s.length-1; i >= 3; i -= 4) {
        // extract out in substrings of 4 and convert to hex
        part = s.substr(i+1-4, 4);
        accum = 0;
        for (k = 0; k < 4; k += 1) {
            if (part[k] !== '0' && part[k] !== '1') {
                // invalid character
                return { valid: false };
            }
            // compute the length 4 substring
            accum = accum * 2 + parseInt(part[k], 10);
        }
        if (accum >= 10) {
            // 'A' to 'F'
            ret = String.fromCharCode(accum - 10 + 'A'.charCodeAt(0)) + ret;
        } else {
            // '0' to '9'
            ret = String(accum) + ret;
        }
    }
    // remaining characters, i = 0, 1, or 2
    if (i >= 0) {
        accum = 0;
        // convert from front
        for (k = 0; k <= i; k += 1) {
            if (s[k] !== '0' && s[k] !== '1') {
                return { valid: false };
            }
            accum = accum * 2 + parseInt(s[k], 10);
        }
        // 3 bits, value cannot exceed 2^3 - 1 = 7, just convert
        ret = String(accum) + ret;
    }
    return { valid: true, result: ret };
}



reloadData = function() {
	$("[name='datatype']").each(function(index, element) {
        if ($(this).is(":checked")) type = $(this).val();
    });
	var Data = [];
	var html= Template;
///////////////////////////////////////////////////////////////////////////////////////////////////////////
	for (var x=0;x<=7;x++) {
		var BinStr="";
		for (var y=0;y<=4;y++) {
			if ($(".dot-px[data-x='" + x + "'][data-y='" + y + "']").attr("class").indexOf("high")>=0) {
				BinStr += "1";
			} else {
				BinStr += "0";
			}
		}
		Data[x] = type == "hex" ? "0x" + binaryToHex(BinStr)['result'] : "B" + BinStr;
	}
	for (var i=0;i<=7;i++) {
		html = html.replace("{DataX0" + i + "}", Data[i]);
	}
	$("#code-box").html(html);
	Prism.highlightAll();
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
	for (x=0;x<=7;x++) {
		BinStr="";
		for (y=5;y<=9;y++) {
			if ($(".dot-px[data-x='" + x + "'][data-y='" + y + "']").attr("class").indexOf("high")>=0) {
				BinStr += "1";
			} else {
				BinStr += "0";
			}
		}
		Data[x] = type == "hex" ? "0x" + binaryToHex(BinStr)['result'] : "B" + BinStr;
	}
	for (i=0;i<=7;i++) {
		html = html.replace("{DataX1" + i + "}", Data[i]);
	}
	$("#code-box").html(html);
	Prism.highlightAll();
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
	for (x=0;x<=7;x++) {
		BinStr="";
		for (y=10;y<=14;y++) {
			if ($(".dot-px[data-x='" + x + "'][data-y='" + y + "']").attr("class").indexOf("high")>=0) {
				BinStr += "1";
			} else {
				BinStr += "0";
			}
		}
		Data[x] = type == "hex" ? "0x" + binaryToHex(BinStr)['result'] : "B" + BinStr;
	}
	for (i=0;i<=7;i++) {
		html = html.replace("{DataX2" + i + "}", Data[i]);
	}
	$("#code-box").html(html);
	Prism.highlightAll();
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
	for (x=0;x<=7;x++) {
		BinStr="";
		for (y=15;y<=19;y++) {
			if ($(".dot-px[data-x='" + x + "'][data-y='" + y + "']").attr("class").indexOf("high")>=0) {
				BinStr += "1";
			} else {
				BinStr += "0";
			}
		}
		Data[x] = type == "hex" ? "0x" + binaryToHex(BinStr)['result'] : "B" + BinStr;
	}
	for (i=0;i<=7;i++) {
		html = html.replace("{DataX3" + i + "}", Data[i]);
	}
	$("#code-box").html(html);
	Prism.highlightAll();
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
	for (x=8;x<=15;x++) {
		BinStr="";
		for (y=0;y<=4;y++) {
			if ($(".dot-px[data-x='" + x + "'][data-y='" + y + "']").attr("class").indexOf("high")>=0) {
				BinStr += "1";
			} else {
				BinStr += "0";
			}
		}
		Data[x-8] = type == "hex" ? "0x" + binaryToHex(BinStr)['result'] : "B" + BinStr;
	}
	for (i=0;i<=7;i++) {
		html = html.replace("{DataX4" + i + "}", Data[i]);
	}
	$("#code-box").html(html);
	Prism.highlightAll();
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
	for (x=8;x<=15;x++) {
		BinStr="";
		for (y=5;y<=9;y++) {
			if ($(".dot-px[data-x='" + x + "'][data-y='" + y + "']").attr("class").indexOf("high")>=0) {
				BinStr += "1";
			} else {
				BinStr += "0";
			}
		}
		Data[x-8] = type == "hex" ? "0x" + binaryToHex(BinStr)['result'] : "B" + BinStr;
	}
	for (i=0;i<=7;i++) {
		html = html.replace("{DataX5" + i + "}", Data[i]);
	}
	$("#code-box").html(html);
	Prism.highlightAll();
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
	for (x=8;x<=15;x++) {
		BinStr="";
		for (y=10;y<=14;y++) {
			if ($(".dot-px[data-x='" + x + "'][data-y='" + y + "']").attr("class").indexOf("high")>=0) {
				BinStr += "1";
			} else {
				BinStr += "0";
			}
		}
		Data[x-8] = type == "hex" ? "0x" + binaryToHex(BinStr)['result'] : "B" + BinStr;
	}
	for (i=0;i<=7;i++) {
		html = html.replace("{DataX6" + i + "}", Data[i]);
	}
	$("#code-box").html(html);
	Prism.highlightAll();
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
	for (x=8;x<=15;x++) {
		BinStr="";
		for (y=15;y<=19;y++) {
			if ($(".dot-px[data-x='" + x + "'][data-y='" + y + "']").attr("class").indexOf("high")>=0) {
				BinStr += "1";
			} else {
				BinStr += "0";
			}
		}
		Data[x-8] = type == "hex" ? "0x" + binaryToHex(BinStr)['result'] : "B" + BinStr;
	}
	for (i=0;i<=7;i++) {
		html = html.replace("{DataX7" + i + "}", Data[i]);
	}
	$("#code-box").html(html);
	Prism.highlightAll();
///////////////////////////////////////////////////////////////////////////////////////////////////////////
}



$(document).ready(function(e) {
    $(".dot-px").click(function(e) {
        if ($(this).attr("class").indexOf("high")>=0) {
          $(this).removeClass("high");
		} else {
          $(this).addClass("high");
        }
		reloadData();
    });
	
	$("#clear").click(function(e) {
		for (var x=0;x<=15;x++) {
			for (var y=0;y<=19;y++) {
				$(".dot-px[data-x='" + x + "'][data-y='" + y + "']").removeClass("high");
			}
		}
        reloadData();;
    });
	
	$("#invert").click(function(e) {
		for (var x=0;x<=15;x++) {
			for (var y=0;y<=19;y++) {
				if ($(".dot-px[data-x='" + x + "'][data-y='" + y + "']").attr("class").indexOf("high")>=0)
					$(".dot-px[data-x='" + x + "'][data-y='" + y + "']").removeClass("high");
				else
					$(".dot-px[data-x='" + x + "'][data-y='" + y + "']").addClass("high");
			}
		}
        reloadData();;
    });
	
	reloadData();
});