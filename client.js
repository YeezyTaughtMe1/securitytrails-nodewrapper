const STAPI = require("securitytrails-js")

const stapi = new STAPI('AwLWo4PIHbfqeH3WX33cMMoj0oMzVf1L')

const host = process.env.HOST;

stapi.ping(
    function(data, status, header, err) { 
        console.log("Data:", data);
        console.log("Status:", status);
        console.log("Header:", header);
        console.log("Error:", err);
    });



stapi.usage(
    function(data, status, header, err) { 
        console.log("Data:", data);
        console.log("Status:", status);
        console.log("Header:", header);
        console.log("Error:", err);
    });


stapi.get_domain(
    host, // hostname
    function(data, status, header, err) { 
        console.log("Data:", data);
        console.log("Status:", status);
        console.log("Header:", header);
        console.log("Error:", err);
    });


stapi.list_domain(
    host, // domain
    function(data, status, header, err) { 
        console.log("Data:", data);
        console.log("Status:", status);
        console.log("Header:", header);
        console.log("Error:", err);
    });


stapi.list_tags(
    host, // domain
    function(data, status, header, err) { 
        console.log("Data:", data);
        console.log("Status:", status);
        console.log("Header:", header);
        console.log("Error:", err);
    });


stapi.get_WHOIS(
    host, // domain
    function(data, status, header, err) { 
        console.log("Data:", data);
        console.log("Status:", status);
        console.log("Header:", header);
        console.log("Error:", err);
    });


stapi.list_by_record_type(
    {
        hostname    : host,
        type        : "a",
        page        : 1     // Optional
    },
    function(data, status, header, err) { 
        console.log("Data:", data);
        console.log("Status:", status);
        console.log("Header:", header);
        console.log("Error:", err);
    });


stapi.list_by_domain(
    {
        hostname    : host,
        page        : 1     // Optional
    },
    function(data, status, header, err) { 
        console.log("Data:", data);
        console.log("Status:", status);
        console.log("Header:", header);
        console.log("Error:", err);
    });


stapi.explore_ips(
    {
        ip      : "1.1.1.1",    // Optional
        mask    : 28            // Optional
    },
    function(data, status, header, err) { 
        console.log("Data:", data);
        console.log("Status:", status);
        console.log("Header:", header);
        console.log("Error:", err);
    });

stapi.search(
    {
        page   : 1,   // Optional
        filter : {
            mx      : "alt4.aspmx.l.google.com",
            keyword : "stackover"
        }
    },
    function(data, status, header, err) { 
        console.log("Data:", data);
        console.log("Status:", status);
        console.log("Header:", header);
        console.log("Error:", err);
    });


stapi.search_stats(
    {
        page   : 1,   // Optional
        filter : {
            mx      : "alt4.aspmx.l.google.com",
            keyword : "stackover"
        }
    },
    function(data, status, header, err) { 
        console.log("Data:", data);
        console.log("Status:", status);
        console.log("Header:", header);
        console.log("Error:", err);
    });


stapi.get("/v1/domain/securitytrails.com",
    function (data, status, header, err) {
        console.log("Data:", data);
        console.log("Status:", status);
        console.log("Header:", header);
        console.log("Error:", err);
    });

stapi.post("/v1/search/list?page=1",
    {
        filter: {
            mx: "alt4.aspmx.l.google.com",
            keyword: "stackover"
        }
    },
    function (data, status, header, err) {
        console.log("Data:", data);
        console.log("Status:", status);
        console.log("Header:", header);
        console.log("Error:", err);
    });
