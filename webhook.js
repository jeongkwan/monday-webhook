import express from "express"
import http from "http"
import bodyParser from "body-parser"

const app = express();
const server = http.createServer(app);

const accessTokens = new Map();

// JEONGKWAN
//accessTokens.set("51179301","eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM1MzgwODgzNSwiYWFpIjoxMSwidWlkIjo1MTE3OTMwMSwiaWFkIjoiMjAyNC0wNC0zMFQxMzoyNzoyNi4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM1MzY5ODEsInJnbiI6InVzZTEifQ.MDLV-toIwAtW8EfUBz1EPggAAyhNUeAdS2R2sgqP_f8");

// KYUBONG
//accessTokens.set("51179302","eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM1Njk3ODIyNywiYWFpIjoxMSwidWlkIjo1MTE3OTMwMiwiaWFkIjoiMjAyNC0wNS0wOFQxMDo1NDoyNC40MDRaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM1MzY5ODEsInJnbiI6InVzZTEifQ.g6wxEPisa6ypeEvyAynA3OOn5Pq8NiiGKhOLb4I-YZg");

// GWANGSU
//accessTokens.set("51179274","eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM1Njk5MDE1NCwiYWFpIjoxMSwidWlkIjo1MTE3OTI3NCwiaWFkIjoiMjAyNC0wNS0wOFQxMToyNzowOS4yMjNaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM1MzY5ODEsInJnbiI6InVzZTEifQ.vZXf3mlQuSAwxlewUtbJhu2CG1N0xpP4iuabOqIUZXE");

// SEJONG
//accessTokens.set("51182059","eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM1NzAxNjE3MSwiYWFpIjoxMSwidWlkIjo1MTE4MjA1OSwiaWFkIjoiMjAyNC0wNS0wOFQxMjoyODo1Mi42MjRaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM1MzY5ODEsInJnbiI6InVzZTEifQ.k3r9PUZlllX1tsNZ6KK8PVP_PqzcqXlfNSf5VEYLy3s");


// YUMI
//accessTokens.set("51124874","eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM1NzM3NjI1NiwiYWFpIjoxMSwidWlkIjo1MTEyNDg3NCwiaWFkIjoiMjAyNC0wNS0wOVQwMjoyMDoyNy4zNzRaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM1MzY5ODEsInJnbiI6InVzZTEifQ.HA_YGkHDvBSA4pAcLm1FOX0D2HycwQ-0lTII_nChcbQ");

// SEUNGKWON
//accessTokens.set("51179281","eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM1NzM3NjEwOCwiYWFpIjoxMSwidWlkIjo1MTE3OTI4MSwiaWFkIjoiMjAyNC0wNS0wOVQwMjoxOTo0MC42MjdaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM1MzY5ODEsInJnbiI6InVzZTEifQ.Xh11M53tnbFaUiXOOVNns_ey56ZTNe4_pOEHwxt8gBs");

// KWANHYUN
//accessTokens.set("50851168","eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM1Njk2ODEzMywiYWFpIjoxMSwidWlkIjo1MDg1MTE2OCwiaWFkIjoiMjAyNC0wNS0wOFQxMDoyMzo1OS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM1MzY5ODEsInJnbiI6InVzZTEifQ.SED5Uud2pfLhQG0d3CJgbezpd0GHD-zTtYHqcejAkA8");

// EUNKYUNG
//accessTokens.set("51186690","eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM1ODUwMjUzMiwiYWFpIjoxMSwidWlkIjo1MTE4NjY5MCwiaWFkIjoiMjAyNC0wNS0xM1QwNDo0MDowNy40OTFaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM1MzY5ODEsInJnbiI6InVzZTEifQ.u7g-AlUsxlC751PxOYyGt5JL7IOK8SzeRte6piaSrlA");

// NAMSU
//accessTokens.set("51179282","eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM1NzAzNTk0NiwiYWFpIjoxMSwidWlkIjo1MTE3OTI4MiwiaWFkIjoiMjAyNC0wNS0wOFQxMzowNjoxNS4wNjJaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM1MzY5ODEsInJnbiI6InVzZTEifQ.fUEULJSjDb3ql5VBk_MvddxkKhjUeXBrWWq33jNLFP4");

// YONGMIN
//accessTokens.set("51179316","eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM1NzA1NzU1OSwiYWFpIjoxMSwidWlkIjo1MTE3OTMxNiwiaWFkIjoiMjAyNC0wNS0wOFQxMzo0MDoxMS41OTRaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM1MzY5ODEsInJnbiI6InVzZTEifQ.kib6qAF9oP9PSfSgyFzD9BUu9nltQgsG8ef8UHcHxV0");


// BYUNGJU
//accessTokens.set("51179280","eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM1NzM3NjcxNSwiYWFpIjoxMSwidWlkIjo1MTE3OTI4MCwiaWFkIjoiMjAyNC0wNS0wOVQwMjoyMzoxMi4yMTBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM1MzY5ODEsInJnbiI6InVzZTEifQ.7NBzjHs04D569N7jiBJsQqai4Optndmh1jpwMbk38b4");

// HOSEUNG
accessTokens.set("51177148","eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM1NzM0MTY4OCwiYWFpIjoxMSwidWlkIjo1MTE3NzE0OCwiaWFkIjoiMjAyNC0wNS0wOFQyMzoyMDoyMS4zNDZaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM1MzY5ODEsInJnbiI6InVzZTEifQ.CejYiVIb9H3bp_vzUzFGyAStozfKhNKEwlx3t995uhQ");



const username = new Map();

// JEONGKWAN
username.set("51179301","이정관(<a class='user_mention_editor router' href='https://ibm.monday.com/users/51179301-jeongkwan-lee1-ibm-com' data-mention-type='User' data-mention-id='51179301' target='_blank' rel='noopener noreferrer'>@Jeongkwan.Lee1@ibm.com</a>)");

// KYUBONG
username.set("51179302","이규봉(<a class='user_mention_editor router' href='https://ibm.monday.com/users/51179302-kyblee-kr-ibm-com' data-mention-type='User' data-mention-id='51179302' target='_blank' rel='noopener noreferrer'>@kyblee@kr.ibm.com</a>)");

// GWANGSU
username.set("51179274","김광수(<a class='user_mention_editor router' href='https://ibm.monday.com/users/51179274-gwangsu-kim-ibm-com' data-mention-type='User' data-mention-id='51179274' target='_blank' rel='noopener noreferrer'>@Gwangsu.Kim@ibm.com</a>)");

// SEJONG
username.set("51182059","류세종(<a class='user_mention_editor router' href='https://ibm.monday.com/users/51182059-sejong-ryu-ibm-com' data-mention-type='User' data-mention-id='51182059' target='_blank' rel='noopener noreferrer'>@Sejong.Ryu@ibm.com</a>)");


// YUMI
username.set("51124874","김유미(<a class='user_mention_editor router' href='https://ibm.monday.com/users/51124874-yumi-kim1-ibm-com' data-mention-type='User' data-mention-id='51124874' target='_blank' rel='noopener noreferrer'>@Yumi.Kim1@ibm.com</a>)");

// SEUNGKWON
username.set("51179281","김승권(<a class='user_mention_editor router' href='https://ibm.monday.com/users/51179281-braunkim-kr-ibm-com' data-mention-type='User' data-mention-id='51179281' target='_blank' rel='noopener noreferrer'>@braunkim@kr.ibm.com</a>)");

// KWANHYUN
username.set("50851168","김관현(<a class='user_mention_editor router' href='https://ibm.monday.com/users/50851168-kwanhyun-kim-ibm-com' data-mention-type='User' data-mention-id='50851168' target='_blank' rel='noopener noreferrer'>@Kwanhyun.Kim@ibm.com</a>)");

// EUNKYUNG
username.set("51186690","김은경(<a class='user_mention_editor router' href='https://ibm.monday.com/users/51186690-eunkyung-kim' data-mention-type='User' data-mention-id='51186690' target='_blank' rel='noopener noreferrer'>@EunKyung Kim</a>)");

// NAMSU
username.set("51179282","박남수(<a class='user_mention_editor router' href='https://ibm.monday.com/users/51179282-namsu-park-ibm-com' data-mention-type='User' data-mention-id='51179282' target='_blank' rel='noopener noreferrer'>@Namsu.Park@ibm.com</a>)");

// YONGMIN
username.set("51179316","김용민(<a class='user_mention_editor router' href='https://ibm.monday.com/users/51179316-kimym-kr-ibm-com' data-mention-type='User' data-mention-id='51179316' target='_blank' rel='noopener noreferrer'>@kimym@kr.ibm.com</a>)");


// BYUNGJU
username.set("51179280","박병주(<a class='user_mention_editor router' href='https://ibm.monday.com/users/51179280-byungjoo-park-ibm-com' data-mention-type='User' data-mention-id='51179280' target='_blank' rel='noopener noreferrer'>@ByungJoo.Park@ibm.com</a>)");

// HOSEUNG
username.set("51177148","이호승(<a class='user_mention_editor router' href='https://ibm.monday.com/users/51177148-hsl-kr-ibm-com' data-mention-type='User' data-mention-id='51177148' target='_blank' rel='noopener noreferrer'>@hsl@kr.ibm.com</a>)");



app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/", async function(req, res) {
    console.log(JSON.stringify(req.body, 0, 2));
    res.status(200).send(req.body);
    if("challenge" in req.body)
      return;

    if(req.body.event.type != "create_update")
      return;

    let userId = req.body.event.userId.toString();


//    if(!accessTokens.has(userId))
//      return;
//    let auth = accessTokens.get(userId);
    let auth = accessTokens.get("51177148");
    let uname = username.get(userId);

    let itemquery = "query { items (ids: [" + req.body.event.pulseId + "]) { name }}"; 

      fetch ("https://api.monday.com/v2", {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : auth
         },
         body: JSON.stringify({
           query : itemquery
         })
        })
         .then(res => res.json())
         .then(res => {
          let bodyText = "<p>### AUTO COPIED FROM SUB ITEM ###</p><p><span style='color: rgb(0, 163, 89);' data-redactor-style-cache='color: rgb(0, 163, 89);'>" + uname + "</span><span style='color: rgb(0, 89, 163);' data-redactor-style-cache='color: rgb(0, 89, 163);'>님이 서브아이템 <span style='color: rgb(0, 163, 89);' data-redactor-style-cache='color: rgb(0, 163, 89);'>'"+ res.data.items[0].name +"'</span><span style='color: rgb(0, 89, 163);' data-redactor-style-cache='color: rgb(0, 89, 163);'>에 업데이트한 내용입니다.</span></p><hr>" + req.body.event.body.replace("\\", '').replace(/\"/g, "'");
          console.log(bodyText);
    
          let query = "mutation {create_update (item_id: " + req.body.event.parentItemId + ", body: \"" + bodyText + "\") { id }}";
     
          fetch ("https://api.monday.com/v2", {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : auth
             },
             body: JSON.stringify({
               query : query
             })
            })
             .then(res2 => res2.json())
             .then(res2 => console.log(JSON.stringify(res2, null, 2)));

         });
  }
)

server.listen(process.env.PORT || 8081, function() {
    console.log('Express server listening on port 8081.');

    }
)


