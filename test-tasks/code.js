
"use strict";

cr.plugins_.EnDe = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{
	var pluginProto = cr.plugins_.EnDe.prototype;

	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};
	
	var typeProto = pluginProto.Type.prototype;

	typeProto.onCreate = function()
	{
	};

	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;
	};
	
	var instanceProto = pluginProto.Instance.prototype;

	instanceProto.onCreate = function()
	{
	};

    function EN(str, pw) 
    {
        if(pw == null || pw.length <= 0) 
        {
            return null;
        }
      
        var prand = "";
        for(var i=0; i<pw.length; i++) 
        {
            prand += pw.charCodeAt(i).toString();
        }
        var spos = Math.floor(prand.length / 5);
        var mult = parseInt(prand.charAt(spos) + prand.charAt(spos*2) + prand.charAt(spos*3) + prand.charAt(spos*4) + prand.charAt(spos*5));
        var incr = Math.ceil(pw.length / 2);
        var modu = Math.pow(2, 31) - 1;
        if(mult < 2) 
        {
            return null;
        }
        var salt = Math.round(Math.random() * 1000000000) % 100000000;
        prand += salt;
        while(prand.length > 10) 
        {
            prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
        }
        prand = (mult * prand + incr) % modu;
        var enc_chr = "";
        var enc_str = "";
        for(var i=0; i<str.length; i++) 
        {
            enc_chr = parseInt(str.charCodeAt(i) ^ Math.floor((prand / modu) * 255));
            if(enc_chr < 16) 
            {
                enc_str += "0" + enc_chr.toString(16);
            } 
            else 
            {
                enc_str += enc_chr.toString(16);
            }
            prand = (mult * prand + incr) % modu;
        }
        salt = salt.toString(16);
        while(salt.length < 8)
        {
            salt = 0 + salt;
        }
        enc_str += salt;
        return enc_str;
    }

    function DE(str, pw) 
    {
        if(str == null || str.length < 8) 
        {
            return null;
        }
        if(pw == null || pw.length <= 0) 
        {
            return;
        }
        var prand = "";
        for(var i=0; i<pw.length; i++) 
        {
            prand += pw.charCodeAt(i).toString();
        }
        var spos = Math.floor(prand.length / 5);
        var mult = parseInt(prand.charAt(spos) + prand.charAt(spos*2) + prand.charAt(spos*3) + prand.charAt(spos*4) + prand.charAt(spos*5));
        var incr = Math.round(pw.length / 2);
        var modu = Math.pow(2, 31) - 1;
        var salt = parseInt(str.substring(str.length - 8, str.length), 16);
        str = str.substring(0, str.length - 8);
        prand += salt;
        while(prand.length > 10) 
        {
            prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
        }
        prand = (mult * prand + incr) % modu;
        var enc_chr = "";
        var enc_str = "";
        for(var i=0; i<str.length; i+=2) 
        {
            enc_chr = parseInt(parseInt(str.substring(i, i+2), 16) ^ Math.floor((prand / modu) * 255));
            enc_str += String.fromCharCode(enc_chr);
            prand = (mult * prand + incr) % modu;
        }
        return enc_str;
    }    

	function Cnds() {};
	pluginProto.cnds = new Cnds();    


	function Acts() {};
	pluginProto.acts = new Acts();


	function Exps() {};
	pluginProto.exps = new Exps();

    Exps.prototype.EN = function (ret, str, pw)
	{
	    str = escape(str);
        pw = escape(pw);  
        var res = EN(str, pw);
        if (res == null)
            res = "";
	    ret.set_string( res );
	};
    Exps.prototype.DE = function (ret, dat, pw)
	{
	    pw = escape(pw);
        var res = DE(dat, pw);
        if (res == null)
            res = "";
	    ret.set_string( unescape(res) );
	};    
}());