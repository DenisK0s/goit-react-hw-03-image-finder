(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__HxzSu",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__20Wn9"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__27YpQ",Modal:"Modal_Modal__2cABz"}},22:function(e,t,a){e.exports={Container:"Container_Container__1sRyw",HeaderContainer:"Container_HeaderContainer__3hweT"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2xhrw"}},24:function(e,t,a){e.exports={Button:"Button_Button__2d4Z_"}},70:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(9),o=a.n(c),l=a(13),i=a(4),s=a(5),u=a(7),m=a(6),h=a(8),d=a.n(h),g=a(0),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={inputValue:""},e.inputHandler=function(t){var a=t.currentTarget;e.setState({inputValue:a.value})},e.submitForm=function(t){t.preventDefault();var a=e.state.inputValue;(0,e.props.onSubmit)(a),e.resetState()},e.resetState=function(){e.setState({inputValue:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.inputValue;return Object(g.jsx)("header",{className:d.a.Searchbar,children:Object(g.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.submitForm,children:[Object(g.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(g.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{className:d.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,value:e,onChange:this.inputHandler,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),p=a(11),b=a.n(p),f=function(e){var t=e.smallImageUrl,a=e.largeImageUrl,r=e.imageName;return Object(g.jsx)("li",{className:b.a.ImageGalleryItem,children:Object(g.jsx)("img",{src:t,alt:r,className:b.a.ImageGalleryItemImage,"data-url":a})})},y=a(22),O=a.n(y),_=function(e){var t=e.children;return Object(g.jsx)("div",{className:O.a.Container,children:t})},v=a(23),S=a.n(v),I=function(e){var t=e.images,a=e.modalHandler;return Object(g.jsx)(_,{children:Object(g.jsx)("ul",{className:S.a.ImageGallery,onClick:a,children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL,n=e.tags;return Object(g.jsx)(f,{smallImageUrl:a,largeImageUrl:r,imageName:n},t)}))})})},x=a(24),w=a.n(x),k=function(e){var t=e.clickHandler,a=e.children;return Object(g.jsx)("button",{type:"button",className:w.a.Button,onClick:t,children:a})},B=a(12),C=a.n(B),F=document.querySelector("#modal-root"),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e.overlayClickHandler=function(t){t.target===t.currentTarget&&e.props.closeModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.children;return Object(c.createPortal)(Object(g.jsx)("div",{className:C.a.Overlay,onClick:this.overlayClickHandler,children:Object(g.jsx)("div",{className:C.a.Modal,children:e})}),F)}}]),a}(r.Component),H=a(25),M=a.n(H),E=function(e){var t=e.type,a=void 0===t?"Puff":t,r=e.color,n=e.height,c=e.width,o=e.timeout;return Object(g.jsx)(M.a,{type:a,color:r,height:n,width:c,timeout:o})},P=a(26),L=a.n(P),N={BASE_URL:"https://pixabay.com/api/",API_KEY:"20625460-dce04eecf80fa07713c408cae",IMAGES_PER_PAGE:12},U=function(e){var t=e.searchQuery,a=e.currentPage,r=N.API_KEY,n=N.IMAGES_PER_PAGE,c="".concat(N.BASE_URL,"?key=").concat(r,"&q=").concat(t,"&per_page=").concat(n,"&page=").concat(a);return L.a.get(c).then((function(e){return e.data}))},A=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},Q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={images:[],modalOpen:!1,currentPage:1,searchQuery:"",isLoading:!1,error:null,largeImageUrl:""},e.toggleModal=function(){e.setState((function(e){return{modalOpen:!e.modalOpen}}))},e.galleryClickHandler=function(t){if(t.target!==t.currentTarget){var a=t.target.dataset.url;e.setState({largeImageUrl:a},e.toggleModal)}},e.submitFormHandler=function(t){e.setState({searchQuery:t,currentPage:1,images:[]})},e.fetchImages=function(){var t=e.state,a={searchQuery:t.searchQuery,currentPage:t.currentPage};e.setState({isLoading:!0}),U(a).then((function(t){return e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t.hits)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){A(),e.setState({isLoading:!1})}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,r=e.modalOpen,n=e.largeImageUrl,c=t.length>0&&!a;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(j,{onSubmit:this.submitFormHandler}),Object(g.jsx)(I,{images:t,modalHandler:this.galleryClickHandler}),a&&Object(g.jsx)(_,{children:Object(g.jsx)(E,{type:"ThreeDots"})}),c&&Object(g.jsx)(_,{children:Object(g.jsx)(k,{clickHandler:this.fetchImages,children:"Load More"})}),r&&Object(g.jsx)(G,{closeModal:this.toggleModal,children:Object(g.jsx)("img",{src:n,alt:"#"})})]})}}]),a}(r.Component);a(70),a(71);o.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(Q,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__1Fnj5",SearchForm:"SearchBar_SearchForm__Go5gv",SearchFormButton:"SearchBar_SearchFormButton__2dHy7",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__27XO1",SearchFormInput:"SearchBar_SearchFormInput__2ZXf8"}}},[[72,1,2]]]);
//# sourceMappingURL=main.cf68f6f3.chunk.js.map