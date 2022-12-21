(function(){var e={9733:function(e,t,a){"use strict";a.d(t,{De:function(){return n},UA:function(){return o},iR:function(){return r}});const o="access_token",r="customer_logged_in",n="avored-cart-tokens"},6308:function(e,t,a){"use strict";var o=a(9963),r=a(6252);function n(e,t,a,o,n,s){const i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)((0,r.LL)(e.layout),null,{default:(0,r.w5)((()=>[(0,r.Wm)(i)])),_:1})}const s={class:"bg-gray-200"};function i(e,t,a,o,n,i){const l=(0,r.up)("app-header"),c=(0,r.up)("app-footer");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(l),(0,r.WI)(e.$slots,"default"),(0,r.Wm)(c)])}var l=a(3577),c=a.p+"img/logo_only.4ec04c9f.svg";const d={class:"bg-white shadow-md"},u={class:"container mx-auto"},m={class:"justify-between"},p={class:"py-4 flex w-full items-center"},g=(0,r._)("img",{class:"w-6 h-6",src:c,alt:"avored e commerce"},null,-1),f=(0,r._)("span",{class:"text-2xl ml-3 text-red-700"},"AvoRed",-1),h={key:0,class:"hidden ml-auto md:flex space-x-6"},_={key:0},v={key:1,class:"lds-ellipsis"},w=(0,r._)("div",null,null,-1),y=(0,r._)("div",null,null,-1),b=(0,r._)("div",null,null,-1),x=(0,r._)("div",null,null,-1),k=[w,y,b,x];function C(e,t,a,o,n,s){const i=(0,r.up)("router-link"),c=(0,r.up)("vue-feature");return(0,r.wg)(),(0,r.iD)("section",d,[(0,r._)("div",u,[(0,r._)("nav",m,[(0,r._)("div",p,[(0,r.Wm)(i,{class:"flex items-center",to:{name:"home"}},{default:(0,r.w5)((()=>[g,f])),_:1}),e.fetching?((0,r.wg)(),(0,r.iD)("div",v,k)):((0,r.wg)(),(0,r.iD)("ul",h,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.data.allCategory,((e,t)=>((0,r.wg)(),(0,r.iD)("li",{key:`category-link-${t}`},[(0,r.Wm)(i,{class:"text-gray-600 hover:text-red-500 font-semibold",to:{name:"category",params:{slug:e.slug}}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.name),1)])),_:2},1032,["to"])])))),128)),(0,r._)("li",null,[(0,r.Wm)(i,{class:"self-center hover:text-red-500",to:{name:"account"}},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{type:"user"})])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(i,{class:"self-center hover:text-red-500",to:{name:"cart"}},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{type:"shopping-cart"})])),_:1})]),e.isAuth?((0,r.wg)(),(0,r.iD)("li",_,[(0,r.Wm)(i,{class:"self-center hover:text-red-500",to:{name:"logout"}},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{type:"log-out"})])),_:1})])):(0,r.kq)("",!0)]))])])])])}var A=a(456);const P=A.ZP`
    query CategoryAllQuery {
        allCategory {
            name
            slug
        }
    }
`;var O=P,S=a(9733),E=a(4293),D=a.n(E);const j=()=>{const e=localStorage.getItem(S.UA);return!D()(e)},T=()=>{const e=localStorage.getItem(S.iR);return!D()(e)},Z=()=>localStorage.getItem("access_token");var N={isAuth:j,getToken:Z,isCustomer:T},L=a(6121),M=a(2801),q=(0,r.aZ)({components:{"vue-feature":M.Z},setup(){const e=(0,L.aM)({query:O});return{isAuth:N,fetching:e.fetching,data:e.data}}}),I=a(3744);const W=(0,I.Z)(q,[["render",C]]);var z=W;const R={class:"mt-12"},U={class:"text-gray-600 body-font bg-white"},$={class:"container py-12 mx-auto flex md:items-center lg:items-start w-full"},B={class:"w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left"},F={class:"flex title-font font-medium items-center md:justify-start justify-center"},V=(0,r._)("img",{class:"w-10 h-10 p-2 bg-white rounded-full",src:c,alt:"avored e commerce"},null,-1),H={class:"ml-3 text-xl"},Q={class:"mt-2 text-sm"},Y={class:"flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"},K={key:0,class:"lg:w-1/4 md:w-1/2 w-full px-4"},J={class:"font-semibold tracking-widest text-md mb-3"},G={class:"list-none mb-10"},X={class:"lg:w-3/4 md:w-1/2 w-full px-4"},ee={class:"tracking-widest font-semibold"},te={class:"mt-5 flex w-full"},ae={class:"lg:w-2/4 md:w-3/4"},oe=["placeholder"],re={class:"bg-red-500"},ne={class:"container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"},se={class:"text-white text-sm text-center sm:text-left"},ie=(0,r._)("a",{href:"https://www.avored.com/",rel:"noopener noreferrer",class:"ml-1",target:"_blank"},"@AvoRed E commerce",-1),le=(0,r.uE)('<span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"><a class="text-gray-200" href="https://www.facebook.com/avored" target="_blank"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a><a class="ml-3 text-gray-200" href="https://twitter.com/avoredecommerce" target="_blank"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a><a class="ml-3 text-gray-200" href="https://linkedin.com/company/avored-e-commerce" target="_blank"><svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24"><path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2" stroke="none"></circle></svg></a></span>',1);function ce(e,t,a,n,s,i){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",R,[(0,r._)("footer",U,[(0,r._)("div",$,[(0,r._)("div",B,[(0,r._)("a",F,[V,(0,r._)("span",H,(0,l.zw)(e.t("avored")),1)]),(0,r._)("p",Q,(0,l.zw)(e.t("avored_tagline")),1)]),(0,r._)("div",Y,[e.fetching?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",K,[(0,r._)("h2",J,(0,l.zw)(e.t("categories")),1),(0,r._)("nav",G,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.data.allCategory,((e,t)=>((0,r.wg)(),(0,r.iD)("li",{key:`footer-category-link-${t}`},[(0,r.Wm)(c,{class:"hover:text-red-300",to:{name:"category",params:{slug:e.slug}}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.name),1)])),_:2},1032,["to"])])))),128))])])),(0,r._)("div",X,[(0,r._)("h5",ee,(0,l.zw)(e.t("signup_for_our_newsletter")),1),(0,r._)("div",te,[(0,r._)("div",ae,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.subscriberEmail=t),placeholder:e.t("enter_your_email_address"),type:"email",class:"w-full px-4 py-3 ring-gray-300 ring-1 focus:ring-red-500 focus:outline-none rounded shadow-sm appearance-none text-gray-700"},null,8,oe),[[o.nr,e.subscriberEmail]])]),(0,r._)("button",{onClick:t[1]||(t[1]=(...t)=>e.notifyMeOnClick&&e.notifyMeOnClick(...t)),class:"ml-3 px-4 py-3 ring-1 ring-red-500 shadow-lg text-white font-semibold bg-red-500 rounded-md"},(0,l.zw)(e.t("notify_me")),1)])])])]),(0,r._)("div",re,[(0,r._)("div",ne,[(0,r._)("p",se,[(0,r.Uk)(" © "+(0,l.zw)(e.year)+" — ",1),ie]),le])])])])}const de=A.ZP`
    mutation CreateSubscriberMutation (
        $email: String!
    ) {
        CreateSubscriberMutation (
            email: $email
        ) {

            id
            customer_id
            email
            status
            created_at
            updated_at
        }
    }
`;var ue=de,me=a(2262),pe=a(9150),ge=(0,r.aZ)({setup(){const e=(0,L.Db)(ue),t=(0,L.aM)({query:O}),{t:a}=(0,pe.QT)(),o=(new Date).getFullYear(),r=(0,me.iH)(""),n=()=>{e.executeMutation({email:r.value}).then((e=>{r.value=""}))};return{notifyMeOnClick:n,year:o,t:a,fetching:t.fetching,data:t.data,subscriberEmail:r}}});const fe=(0,I.Z)(ge,[["render",ce]]);var he=fe,_e=(0,r.aZ)({components:{"app-header":z,"app-footer":he}});const ve=(0,I.Z)(_e,[["render",i]]);var we=ve;const ye={class:"bg-red-500"};function be(e,t,a,o,n,s){return(0,r.wg)(),(0,r.iD)("div",ye,[(0,r.WI)(e.$slots,"default")])}var xe=(0,r.aZ)({});const ke=(0,I.Z)(xe,[["render",be]]);var Ce=ke;const Ae="app";var Pe=(0,r.aZ)({components:{"app-layout":we,"guest-layout":Ce},computed:{layout(){return(this.$route.meta.layout||Ae)+"-layout"}}});const Oe=(0,I.Z)(Pe,[["render",n]]);var Se=Oe,Ee=a(2119);const De={key:0,class:""},je={class:"px-10 mt-5 w-full mx-auto"},Te=(0,r._)("h1",{class:"my-5 text-2xl text-red-700"},"Latest Products",-1),Ze={class:"grid grid-cols-4 gap-6"},Ne={class:"overflow-hidden relative"},Le=["src","alt"],Me={class:"w-full"},qe={class:"flex justify-center w-full absolute bottom-4 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100"},Ie={class:"px-4 py-3 bg-white"},We={class:"text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out"},ze={class:"flex py-2"},Re={class:"text-red-600 font-bold text-2xl"};function Ue(e,t,a,o,n,s){const i=(0,r.up)("AddToCart"),c=(0,r.up)("router-link");return e.fetching?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",De,[(0,r._)("section",je,[Te,(0,r._)("div",Ze,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.products.latestProductQuery,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:`product-card-${t}`,class:"shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group"},[(0,r._)("div",Ne,[(0,r.Wm)(c,{to:{name:"product.show",params:{slug:e.slug}},class:""},{default:(0,r.w5)((()=>[(0,r._)("img",{class:"w-full transition duration-700 ease-in-out group-hover:opacity-60",src:e.main_image_url,alt:e.name},null,8,Le),(0,r._)("div",Me,[(0,r._)("div",qe,[(0,r.Wm)(i,{slug:e.slug},null,8,["slug"])])])])),_:2},1032,["to"])]),(0,r._)("div",Ie,[(0,r.Wm)(c,{to:{name:"product.show",params:{slug:e.slug}},class:""},{default:(0,r.w5)((()=>[(0,r._)("h1",We,(0,l.zw)(e.name),1)])),_:2},1032,["to"]),(0,r._)("div",ze,[(0,r._)("p",Re,"$"+(0,l.zw)(e.price),1)])])])))),128))])])]))}var $e=a(8616);const Be=A.ZP`
    query LatestProductQuery {
      latestProductQuery {
          name
          slug
          main_image_url
          price
      }
  }
`;var Fe=Be,Ve=(0,r.aZ)({components:{AddToCart:$e.Z},setup(){const e=(0,L.aM)({query:Fe});return document.title="AvoRed Laravel E commerce",{fetching:e.fetching,products:e.data}}});const He=(0,I.Z)(Ve,[["render",Ue]]);var Qe=He;const Ye=[{path:"/",name:"home",component:Qe,meta:{middleware:"guest",layout:"app"}},{path:"/category/:slug",name:"category",component:()=>a.e(329).then(a.bind(a,3329)),meta:{middleware:"guest",layout:"app"}},{path:"/product/:slug",name:"product.show",component:()=>a.e(526).then(a.bind(a,4526)),meta:{middleware:"guest",layout:"app"}},{path:"/cart",name:"cart",component:()=>a.e(336).then(a.bind(a,4336)),meta:{middleware:"guest",layout:"app"}},{path:"/checkout",name:"checkout",component:()=>Promise.all([a.e(522),a.e(419)]).then(a.bind(a,6419)),meta:{middleware:"guest",layout:"app"}},{path:"/checkout/success",name:"checkout.successs",component:()=>a.e(563).then(a.bind(a,8563)),meta:{middleware:"customer",layout:"app"}},{path:"/login",name:"auth.login",component:()=>Promise.all([a.e(522),a.e(673)]).then(a.bind(a,7673)),meta:{middleware:"guest",layout:"app"}},{path:"/forgot-password",name:"auth.forgot.password",component:()=>a.e(41).then(a.bind(a,2041)),meta:{middleware:"guest",layout:"app"}},{path:"/reset-password",name:"auth.reset.password",component:()=>a.e(359).then(a.bind(a,4359)),meta:{middleware:"guest",layout:"app"}},{path:"/register",name:"auth.register",component:()=>Promise.all([a.e(522),a.e(428)]).then(a.bind(a,5428)),meta:{middleware:"guest",layout:"app"}},{path:"/logout",name:"logout",component:()=>a.e(875).then(a.bind(a,3875)),meta:{middleware:"guest",layout:"app"}},{path:"/account",name:"account",component:()=>a.e(73).then(a.bind(a,7073)),meta:{middleware:"customer",layout:"app"}},{path:"/orders",name:"orders.index",component:()=>a.e(575).then(a.bind(a,7575)),meta:{middleware:"customer",layout:"app"}},{path:"/order/:order",name:"order.show",component:()=>a.e(796).then(a.bind(a,4796)),meta:{middleware:"customer",layout:"app"}},{path:"/account/address",name:"address.index",component:()=>a.e(974).then(a.bind(a,3974)),meta:{middleware:"customer",layout:"app"}},{path:"/account/update-address/:id?",name:"address.update",component:()=>Promise.all([a.e(522),a.e(357)]).then(a.bind(a,6357)),meta:{middleware:"customer",layout:"app"}},{path:"/account/create/",name:"address.create",component:()=>Promise.all([a.e(522),a.e(945)]).then(a.bind(a,2945)),meta:{middleware:"customer",layout:"app"}},{path:"/account/edit",name:"account.edit",component:()=>a.e(683).then(a.bind(a,7683)),meta:{middleware:"customer",layout:"app"}}],Ke=(0,Ee.p7)({history:(0,Ee.PO)("/laravel-ecommerce/"),routes:Ye});Ke.beforeEach(((e,t,a)=>{D()(e.meta.middleware)?a():Object.keys(e.meta).map((function(t){"middleware"===t&&"guest"==e.meta.middleware&&a(),"middleware"!==t||"auth"!=e.meta.middleware&&"customer"!=e.meta.middleware||("auth"==e.meta.middleware&&N.isAuth()||"customer"==e.meta.middleware&&N.isCustomer()?a():a("/login"))}))}));var Je=Ke,Ge=a(3907),Xe=(0,Ge.MT)({state:{},mutations:{},actions:{},modules:{}});function et(){const e=a(9517),t={};return e.keys().forEach((a=>{const o=a.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){const r=o[1];t[r]=e(a)}})),t}const tt=(0,pe.o)({legacy:!1,locale:{NODE_ENV:"production",BASE_URL:"/laravel-ecommerce/"}.VUE_APP_I18N_LOCALE||"en",fallbackLocale:{NODE_ENV:"production",BASE_URL:"/laravel-ecommerce/"}.VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:et()});var at=tt;const ot=(0,o.ri)(Se);ot.use(Xe),ot.use(Je),ot.use(at),ot.use(L.ZP,{url:{NODE_ENV:"production",BASE_URL:"/laravel-ecommerce/"}.VUE_APP_GRAPHQL_API_ENDPOINT||"https://api.avored.com/graphql",fetchOptions:()=>{const e=localStorage.getItem("access_token");return e?{headers:{Authorization:`Bearer ${e}`}}:{}}}),ot.mount("#app")},8616:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var o=a(6252),r=a(9963);const n=(0,o.Uk)(" Test ");function s(e,t,a,s,i,l){const c=(0,o.up)("VueFeather");return(0,o.wg)(),(0,o.iD)("a",{onClick:t[0]||(t[0]=(0,r.iM)(((...t)=>e.addToCartOnClick&&e.addToCartOnClick(...t)),["prevent"])),class:"bg-gray-700 inline-block px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"},[(0,o.Wm)(c,{type:"shopping-cart",class:"transition duration-300 ease-in-out flex justify-center items-center text-gray-100"},{default:(0,o.w5)((()=>[n])),_:1})])}var i=a(456);const l=i.ZP`
    mutation AddToCart(
        $slug: String!
        $qty: Float!
        $visitor_id: String
    ) {
        addToCart(
            slug: $slug
            qty: $qty
            visitor_id: $visitor_id
        )  {
            visitor_id
            product_id
            qty
        }
    }
`;var c=l,d=a(2801),u=a(6121),m=a(9733),p=(0,o.aZ)({components:{VueFeather:d.Z},props:{slug:{type:[String],required:!0}},setup(e){const t=(0,u.Db)(c),a=async()=>{var a={slug:"",qty:1,visitor_id:""};a.slug=e.slug,localStorage.getItem(m.De)&&(a.visitor_id=localStorage.getItem(m.De)),t.executeMutation(a).then((e=>{const t=e.data.addToCart;console.log(t),localStorage.setItem(m.De,t[0].visitor_id)}))};return{addToCartOnClick:a}}}),g=a(3744);const f=(0,g.Z)(p,[["render",s]]);var h=f},9517:function(e,t,a){var o={"./el.json":7498,"./en.json":790};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=n,e.exports=r,r.id=9517},7498:function(e){"use strict";e.exports=JSON.parse('{"avored":"AvoRed","avored_tagline":"AvoRed μια ανοιχτού κώδικα υλοποίηση ηλεκτρονικού εμπορίου σε laravel","categories":"Κατηγορίες","signup_for_our_newsletter":"Εγγραφείτε στο ενημερωτικό μας δελτίο","enter_your_email_address":"Πληκτρολογήστε την διεύθυνση email σας","notify_me":"Ειδοποιήστε με","checkout_page":"Σελίδα Ολοκλήρωσης Αγοράς","personal_information":"Προσωπικές Πληροφορίες","first_name":"Όνομα","last_name":"Επώνυμο","email":"Διεύθυνση Email","password":"Κωδικός Πρόσβασης","password_confirmation":"Επιβεβαίωση Κωδικού Πρόσβασης","shipping_information":"Πληροφορίες Αποστολής","company_name":"Επωνυμία Εταιρείας","address1":"Διεύθυνση 1","address2":"Διεύθυνση 2","country":"Χώρα","state":"Πολιτεία","postcode":"Ταχ. Κώδικας","city":"Πόλη","shipping_address":"Διεύθυνση Αποστολής","billing_address":"Διεύθυνση Χρέωσης","delivery_method":"Τρόπος Αποστολής","payment_method":"Τρόπος Πληρωμής","cart_items":"Αντικείμενα Καλαθιού","place_order":"Τοποθετήστε την Παραγγελία","order_summary":"Σύψοψη Παραγγελίας","items":"αντικείμενα","shopping_cart":"Καλάθι Αγορών","product_details":"Πληροφορίες Προϊόντος","quantity":"Ποσότητα","total":"Σύνολο","continue_shopping":"Συνεχίστε τις αγορές σας","price":"Τιμή","checkout":"Ολοκλήρωση αγοράς","edit":"Επεξεργασία","update_profile":"Ενημέρωση Προφίλ","login":"Σύνδεση","forgot_your_password":"Ξεχάσατε τον κωδικό σας;","dont_have_account_with_us":"Δεν έχετε λογαριασμό;","register":"Εγγραφείτε","already_have_account_with_us":"Έχετε ήδη λογαριασμό;","address_information":"Πληροφορίες Διεύθυνσης","create":"Δημιουργία","save_address_information":"Αποθήκευση Πληροφοριών Διεύθυνσης","address_type":"Τύπος Διεύθυνσης","shipping":"Αποστολή","billing":"Τιμολόγηση","save_address":"Αποθήκευση Διεύθυνσης","phone":"Τηλέφωνο","reset_password":"Επαναφορά Κωδικού Πρόσβασης","new_password":"Νέος Κωδικός Πρόσβασης","submit":"Υποβολή","remove":"Αφαίρεση","add_to_cart":"ΠροσθήκηΣτοΚαλάθι","shipping_option":"Επιλογή Αποστολής","payment_option":"Επιλογή Πληρωμής","created_at":"Δημιουργήθηκε την","previous":"Προηγούμενο","next":"Επόμενο","pagination_result_text":"Εμφανίζονται {from} έως {to} από {total} αποτελέσματα","checkout_success_page":"Επιτυχής Ολοκλήρωση Αγοράς","success_order_placed_message":"Η Παραγγελία σας έχει καταχωρηθεί. Ο αριθμός παραγγελίας σας είναι: {order_id}"}')},790:function(e){"use strict";e.exports=JSON.parse('{"avored":"AvoRed","avored_tagline":"AvoRed an open source laravel e-commerce","categories":"Categories","signup_for_our_newsletter":"Signup for our newsletter","enter_your_email_address":"Enter your email address","notify_me":"Notify me","checkout_page":"Checkout Page","personal_information":"Personal Information","first_name":"First Name","last_name":"Last Name","email":"Email Address","password":"Password","password_confirmation":"Password Confirmation","shipping_information":"Shipping Information","company_name":"Company Name","address1":"Address 1","address2":"Address 2","country":"Country","state":"State","postcode":"Postcode","city":"City","shipping_address":"Shipping Address","billing_address":"Billing Address","delivery_method":"Delivery method","payment_method":"Payment method","cart_items":"Cart Items","place_order":"Place Order","order_summary":"Order Summary","items":"items","shopping_cart":"Shopping cart","product_details":"Product details","quantity":"Quantity","total":"Total","continue_shopping":"Continue Shopping","price":"Price","checkout":"Checkout","edit":"Edit","update_profile":"Update Profile","login":"Login","forgot_your_password":"Forgot your password?","dont_have_account_with_us":"Don\'t have an account with us?","register":"Register","already_have_account_with_us":"Already have an account with us?","address_information":"Address Information","create":"Create","save_address_information":"Save Address Information","address_type":"Address Type","shipping":"Shipping","billing":"Billing","save_address":"Save Address","phone":"Phone","reset_password":"Reset Password","new_password":"New Password","submit":"Submit","remove":"Remove","add_to_cart":"AddToCart","shipping_option":"Shipping Option","payment_option":"Payment Option","created_at":"Created at","previous":"Previous","next":"Next","pagination_result_text":"Showing {from} to {to} of {total} results","checkout_success_page":"Checkout Success","success_order_placed_message":"Your Order has been placed. Your order no: {order_id}"}')}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=e,function(){var e=[];a.O=function(t,o,r,n){if(!o){var s=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],n=e[d][2];for(var i=!0,l=0;l<o.length;l++)(!1&n||s>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[l])}))?o.splice(l--,1):(i=!1,n<s&&(s=n));if(i){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,r,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,o){return a.f[o](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{41:"0b063b15",73:"13da8f2a",329:"caadba94",336:"53e630ac",357:"50973f50",359:"eb2e18b3",419:"d7f7a3e7",428:"0d7ba524",522:"29df408a",526:"bca8821c",563:"7a40ae11",575:"3d4901b8",673:"e47ae8a9",683:"119d6fc0",796:"c01fffea",875:"1c647dbc",945:"aee6850c",974:"da1350dd"}[e]+".js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="laravel-ecommerce:";a.l=function(o,r,n,s){if(e[o])e[o].push(r);else{var i,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+n){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+n),i.src=o),e[o]=[r];var m=function(t,a){i.onerror=i.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){a.p="/laravel-ecommerce/"}(),function(){var e={143:0};a.f.j=function(t,o){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise((function(a,o){r=e[t]=[a,o]}));o.push(r[2]=n);var s=a.p+a.u(t),i=new Error,l=function(o){if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,r[1](i)}};a.l(s,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,n,s=o[0],i=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var d=l(a)}for(t&&t(o);c<s.length;c++)n=s[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},o=self["webpackChunklaravel_ecommerce"]=self["webpackChunklaravel_ecommerce"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(6308)}));o=a.O(o)})();
//# sourceMappingURL=app.f1ca756f.js.map