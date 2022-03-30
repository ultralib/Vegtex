(()=>{"use strict";var o={176:(o,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),n=t.n(r)()((function(o){return o[1]}));n.push([o.id,'@use "sass:color";:root{--border-width: 2px;--border-radius: 6px;--text-size-regular: 14px;--text-size-subtitle: 16px;--text-size-button: 16px;--text-size-minibutton: 14px;--text-size-description: 12px;--text-size-minidescription: 9px;--transition: .3s ease-in-out}.theme-dark{--color-0: #FFFFFF;--color-1: #F5F5FF;--color-2: #D0D0DA;--color-3: #A9A9B7;--color-4: #8A8A98;--color-5: #70707C;--color-6: #5B5B65;--color-7: #40404A;--color-8: #2C2C35;--color-9: #1E1E24;--color-10: #0F0F13;--color-11: #000000;--color-success: #15FFAB;--color-warning: #FF7A2F;--color-danger: #FD4438;color:var(--color-1);background-color:var(--color-10)}.theme-light{--color-0: #000000;--color-1: #0F0F13;--color-2: #1E1E24;--color-3: #2C2C35;--color-4: #40404A;--color-5: #5B5B65;--color-6: #70707C;--color-7: #8A8A98;--color-8: #A9A9B7;--color-9: #D0D0DA;--color-10: #F5F5FF;--color-11: #FFFFFF;--color-success: #15FFAB;--color-warning: #FF7A2F;--color-danger: #FD4438;color:var(--color-1);background-color:var(--color-10)}.accent-azure{--color-accent: rgb(0, 98, 255);--color-accent-hover: rgb(25,113,255);--color-accent-semi: rgb(0, 98, 255, .35);--color-accent-text: rgb(255, 255, 255);--color-accent-muted: rgb(255, 255, 255, .8);--shadow-accent: 0px 100px 80px rgba(46, 249, 255, 0.19), 0px 42px 34px rgba(46, 249, 255, 0.136582), 0px 22px 18px rgba(46, 249, 255, 0.11326), 0px 12.5px 10px rgba(46, 249, 255, 0.095), 0px 7px 5px rgba(46, 249, 255, 0.0767396), 0px 3px 2px rgba(46, 249, 255, 0.0534177)}.accent-spring{--color-accent: #62F783;--shadow-accent: $shadow-success}.accent-amethyst{--color-accent: rgb(161, 98, 247);--color-accent-hover: rgb(170,113,247);--color-accent-semi: rgb(161, 98, 247, .35);--color-accent-text: rgb(255, 255, 255);--color-accent-muted: rgb(255, 255, 255, .8);--shadow-accent: 0px 100px 80px rgb(105, 0, 255, 0.19), 0px 42px 34px rgba(105, 0, 255, 0.741675), 0px 22px 18px rgba(105, 0, 255, 0.626781), 0px 12.5px 10px rgba(105, 0, 255, 0.539948), 0px 7px 5px rgba(105, 0, 255, 0.460052), 0px 3px 2px rgba(105, 0, 255, 0.373219), 0px 5px 2px rgba(105, 0, 255, 0.258325)}.accent-toxicyellow{--color-accent: #FFF736}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0px;font:inherit;color:inherit;vertical-align:baseline}*,::after,::before{box-sizing:border-box}html{scroll-behavior:smooth;overflow:hidden;height:100%;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;font-style:normal;font-weight:normal;font-size:var(--text-size-regular)}body{overflow-x:hidden;overflow-y:scroll;height:100%;background-color:var(--color-11)}h1,.h1{font-weight:bold;font-size:40px;line-height:60px;margin-bottom:24px;color:var(--color-1)}h2,.h2{font-weight:800;font-size:32px;line-height:48px;margin-bottom:20px;color:var(--color-1)}h3,.h3{font-weight:bold;font-size:28px;line-height:42px;margin-bottom:16px;color:var(--color-1)}h4,.h4{font-weight:600;font-size:28px;line-height:42px;margin-bottom:16px;color:var(--color-1)}h5,.h5{font-weight:bold;font-size:24px;line-height:38px;margin-bottom:14px;color:var(--color-1)}h6,.h6,vg-card[size-md] [card-title],.vg-card[size-md] [card-title]{font-weight:600;font-size:20px;line-height:34px;margin-bottom:12px;color:var(--color-1)}.h7,vg-card[size-lg] [card-title],.vg-card[size-lg] [card-title],vg-card[size-sm] [card-title],.vg-card[size-sm] [card-title],vg-card[size-xs] [card-title],.vg-card[size-xs] [card-title]{font-weight:bold;font-size:18px;line-height:32px;margin-bottom:12px;color:var(--color-1)}p,.text,vg-card[size-lg] [card-text],.vg-card[size-lg] [card-text],vg-card[size-md] [card-text],.vg-card[size-md] [card-text],vg-card[size-sm] [card-text],.vg-card[size-sm] [card-text],vg-card[size-xs] [card-text],.vg-card[size-xs] [card-text]{font-weight:normal;font-size:16px;margin-bottom:4px;color:var(--color-3)}.color-0{color:var(--color-0)}.color-0 svg,.color-0 path{fill:var(--color-0)}.color-1{color:var(--color-1)}.color-1 svg,.color-1 path{fill:var(--color-1)}.color-2{color:var(--color-2)}.color-2 svg,.color-2 path{fill:var(--color-2)}.color-3{color:var(--color-3)}.color-3 svg,.color-3 path{fill:var(--color-3)}.color-4{color:var(--color-4)}.color-4 svg,.color-4 path{fill:var(--color-4)}.color-5{color:var(--color-5)}.color-5 svg,.color-5 path{fill:var(--color-5)}.color-6{color:var(--color-6)}.color-6 svg,.color-6 path{fill:var(--color-6)}.color-7{color:var(--color-7)}.color-7 svg,.color-7 path{fill:var(--color-7)}.color-8{color:var(--color-8)}.color-8 svg,.color-8 path{fill:var(--color-8)}.color-9{color:var(--color-9)}.color-9 svg,.color-9 path{fill:var(--color-9)}.color-10{color:var(--color-10)}.color-10 svg,.color-10 path{fill:var(--color-10)}.color-11{color:var(--color-11)}.color-11 svg,.color-11 path{fill:var(--color-11)}.color-accent{color:var(--color-accent)}.color-accent svg,.color-accent path{fill:var(--color-accent)}.color-accent-text,vg-icon,.vg-icon{color:var(--color-accent-text)}.color-accent-text svg,vg-icon svg,.vg-icon svg,.color-accent-text path,vg-icon path,.vg-icon path{fill:var(--color-accent-text)}.color-accent-muted{color:var(--color-accent-muted)}.color-accent-muted svg,.color-accent-muted path{fill:var(--color-accent-muted)}.color-success{color:var(--color-success)}.color-success svg,.color-success path{fill:var(--color-success)}.color-warning{color:var(--color-warning)}.color-warning svg,.color-warning path{fill:var(--color-warning)}.color-danger{color:var(--color-danger)}.color-danger svg,.color-danger path{fill:var(--color-danger)}.bg-0{background-color:var(--color-0)}.bg-1{background-color:var(--color-1)}.bg-2{background-color:var(--color-2)}.bg-3{background-color:var(--color-3)}.bg-4{background-color:var(--color-4)}.bg-5{background-color:var(--color-5)}.bg-6{background-color:var(--color-6)}.bg-7{background-color:var(--color-7)}.bg-8{background-color:var(--color-8)}.bg-9{background-color:var(--color-9)}.bg-10{background-color:var(--color-10)}.bg-11{background-color:var(--color-11)}.bg-accent{background-color:var(--color-accent)}.bg-success{background-color:var(--color-success)}.bg-warning{background-color:var(--color-warning)}.bg-danger{background-color:var(--color-danger)}vg-badge,.vg-badge{border-radius:50%;width:max-content;height:max-content}vg-badge[size-lg],.vg-badge[size-lg]{padding:6px 12px;font-size:14px;font-weight:600;line-height:20px}vg-badge[size-lg][type-icon],.vg-badge[size-lg][type-icon]{padding:7px 8px}vg-badge[size-md],.vg-badge[size-md]{padding:2px 10px;font-size:14px;font-weight:600;line-height:20px}vg-badge[size-md][type-icon],.vg-badge[size-md][type-icon]{padding:5px}vg-badge[size-sm],.vg-badge[size-sm]{padding:0px 8px;font-size:12px;font-weight:bold;line-height:20px}vg-badge[size-sm][type-icon],.vg-badge[size-sm][type-icon]{padding:4px}button,.vg-button{width:max-content;border-radius:var(--border-radius);display:flex;justify-content:center;align-items:center;transition:var(--transition);cursor:pointer}button[size-lg],.vg-button[size-lg]{padding:16px 24px;font-weight:500;font-size:18px;line-height:16px}button[size-lg][type-icon],.vg-button[size-lg][type-icon]{padding:14px}button[size-md],.vg-button[size-md]{padding:10px 20px;font-weight:500;font-size:var(--text-size-button);line-height:16px}button[size-md][type-icon],.vg-button[size-md][type-icon]{padding:9px}button[size-sm],.vg-button[size-sm]{padding:6px 20px;font-weight:500;font-size:var(--text-size-minibutton);line-height:20px}button[size-sm][type-icon],.vg-button[size-sm][type-icon]{padding:7px}button[style-accent],.vg-button[style-accent]{background-color:var(--color-accent);color:var(--color-accent-text);border:none}button[style-accent]:hover,button[style-accent]:focus,.vg-button[style-accent]:hover,.vg-button[style-accent]:focus{background-color:var(--color-accent-hover)}button[style-accent]:disabled,.vg-button[style-accent]:disabled{background-color:var(--color-accent);opacity:0.25}button[style-light],.vg-button[style-light]{background-color:var(--color-1);color:var(--color-10);border:none}button[style-light]:hover,button[style-light]:focus,.vg-button[style-light]:hover,.vg-button[style-light]:focus{background-color:var(--color-2)}button[style-light]:disabled,.vg-button[style-light]:disabled{background-color:var(--color-1);opacity:0.25}button[style-secondary],.vg-button[style-secondary]{background-color:var(--color-9);color:var(--color-1);border:none}button[style-secondary]:hover,button[style-secondary]:focus,.vg-button[style-secondary]:hover,.vg-button[style-secondary]:focus{background-color:var(--color-8)}button[style-secondary]:disabled,.vg-button[style-secondary]:disabled{background-color:var(--color-9);opacity:0.25}button[style-ghost],.vg-button[style-ghost]{background-color:transparent;color:var(--color-1);border:none}button[style-ghost]:hover,button[style-ghost]:focus,.vg-button[style-ghost]:hover,.vg-button[style-ghost]:focus{background-color:var(--color-10)}button[style-ghost]:disabled,.vg-button[style-ghost]:disabled{background-color:transparent;opacity:0.25}button[style-outline],.vg-button[style-outline]{background-color:transparent;color:var(--color-1);border:2px solid var(--color-9)}button[style-outline]:hover,button[style-outline]:focus,.vg-button[style-outline]:hover,.vg-button[style-outline]:focus{border:2px solid var(--color-7)}button[style-outline]:disabled,.vg-button[style-outline]:disabled{border:none;opacity:0.25}button[style-light-outline],.vg-button[style-light-outline]{background-color:transparent;color:var(--color-1);border:1px solid rgba(255,255,255,0.5)}button[style-light-outline]:hover,button[style-light-outline]:focus,.vg-button[style-light-outline]:hover,.vg-button[style-light-outline]:focus{border:1px solid white}button[style-light-outline]:disabled,.vg-button[style-light-outline]:disabled{border:none;opacity:0.25}button:disabled,.vg-button:disabled{cursor:not-allowed}input,.vg-input{width:100%;margin-bottom:12px;border:1px solid var(--color-10);border-radius:var(--border-radius);transition:var(--transition);transition-property:background-color, border-color;outline:none;font-family:inherit;color:var(--color-1);background-color:var(--color-10)}input ::placeholder,input ::-moz-placeholder,.vg-input ::placeholder,.vg-input ::-moz-placeholder{color:var(--color-5)}input[size-lg],.vg-input[size-lg]{padding:16px 14px;font-weight:500;font-size:16px;line-height:16px}input[size-md],.vg-input[size-md]{padding:10px 14px;font-weight:400;font-size:14px;line-height:16px}input[size-sm],.vg-input[size-sm]{padding:6px 12px;font-weight:600;font-size:14px;line-height:20px}input:focus,.vg-input:focus{border:1px solid var(--color-accent);outline:4px solid var(--color-accent-semi)}input:disabled,.vg-input:disabled{cursor:not-allowed;opacity:0.7}input:disabled ::placeholder,input:disabled ::-moz-placeholder,.vg-input:disabled ::placeholder,.vg-input:disabled ::-moz-placeholder{color:var(--color-8)}textarea,.vg-textarea{width:100%;min-height:125px;margin-bottom:12px;padding:14px;border:1px solid var(--color-10);border-radius:var(--border-radius);transition:var(--transition);transition-property:background-color, border-color;outline:none;font-weight:500;font-size:16px;font-family:inherit;line-height:24px;color:var(--color-1);background-color:var(--color-10)}textarea ::placeholder,textarea ::-moz-placeholder,.vg-textarea ::placeholder,.vg-textarea ::-moz-placeholder{color:var(--color-5)}textarea:focus,.vg-textarea:focus{border:1px solid var(--color-accent);outline:4px solid var(--color-accent-semi)}textarea:disabled,.vg-textarea:disabled{cursor:not-allowed;opacity:0.7}textarea:disabled ::placeholder,textarea:disabled ::-moz-placeholder,.vg-textarea:disabled ::placeholder,.vg-textarea:disabled ::-moz-placeholder{color:var(--color-8)}vg-card,.vg-card{width:min-content;height:min-content;padding:24px 22px;margin-bottom:12px;border-radius:var(--border-radius);display:flex;flex-direction:column;justify-content:center;align-items:center;transition:var(--transition);background-color:var(--color-10)}vg-card [card-header],.vg-card [card-header]{display:flex;flex-direction:row}vg-card [card-body],.vg-card [card-body]{display:flex;flex-direction:column;width:100%}vg-card [card-footer],.vg-card [card-footer]{display:flex;flex-direction:column;width:100%}vg-card[size-auto],.vg-card[size-auto]{padding:20px;width:min-content;height:min-content}vg-card[size-xl],.vg-card[size-xl]{padding:28px}vg-card[size-lg],.vg-card[size-lg]{flex-direction:column;justify-content:start;padding:14px 16px;width:190px;height:250px;background-color:var(--color-10)}vg-card[size-lg] [card-header],.vg-card[size-lg] [card-header]{width:100%;display:flex;flex-direction:column;justify-content:start;margin-bottom:20px}vg-card[size-lg] [card-body],.vg-card[size-lg] [card-body]{height:100%}vg-card[size-lg] [card-footer],.vg-card[size-lg] [card-footer]{display:flex;flex-direction:column;justify-content:start}vg-card[size-lg] [card-title],.vg-card[size-lg] [card-title]{margin-bottom:0}vg-card[size-lg] [card-text],.vg-card[size-lg] [card-text]{margin-bottom:14px;font-size:14px;color:var(--color-2)}vg-card[size-md],.vg-card[size-md]{flex-direction:column;justify-content:start;padding:24px;width:180px;height:220px;background-color:var(--color-10)}vg-card[size-md] [card-header],.vg-card[size-md] [card-header]{width:100%;flex-direction:column;justify-content:start;margin-bottom:40px}vg-card[size-md] [card-body],.vg-card[size-md] [card-body]{height:100%;justify-content:end}vg-card[size-md] [card-title],.vg-card[size-md] [card-title]{margin-bottom:0}vg-card[size-md] [card-text],.vg-card[size-md] [card-text]{margin-bottom:6px;font-size:14px;color:var(--color-0)}vg-card[size-sm],.vg-card[size-sm]{flex-direction:column;justify-content:start;padding:18px;width:166px;height:156px}vg-card[size-sm] [card-header],.vg-card[size-sm] [card-header]{width:100%;justify-content:start;margin-bottom:30px}vg-card[size-sm] [card-title],.vg-card[size-sm] [card-title]{margin-bottom:0}vg-card[size-sm] [card-text],.vg-card[size-sm] [card-text]{font-size:14px;color:var(--color-3)}vg-card[size-xs],.vg-card[size-xs]{flex-direction:row;justify-content:start;padding:12px;width:216px;height:68px}vg-card[size-xs] [card-header],.vg-card[size-xs] [card-header]{margin-right:14px}vg-card[size-xs] [card-title],.vg-card[size-xs] [card-title]{margin-bottom:0}vg-card[size-xs] [card-text],.vg-card[size-xs] [card-text]{font-size:12px;color:var(--color-2)}vg-card[style-dark],.vg-card[style-dark]{background-color:var(--color-11)}vg-card[style-outline],.vg-card[style-outline]{background-color:transparent;border:var(--border-width) solid var(--color-8)}vg-card[style-dashed],.vg-card[style-dashed]{background-color:transparent;border:var(--border-width) dashed var(--color-accent)}vg-icon,.vg-icon{border-radius:var(--border-radius);width:44px;height:44px;background-color:var(--color-accent)}vg-icon i,.vg-icon i{color:var(--color-1);display:flex;justify-content:center;align-items:center}vg-icon i svg,.vg-icon i svg{width:26px;height:26px}vg-icon[size-lg],.vg-icon[size-lg]{width:44px;height:44px;padding:12px}vg-icon[size-lg] i svg,.vg-icon[size-lg] i svg{width:22px;height:22px}vg-icon[size-md],.vg-icon[size-md]{width:36px;height:36px;padding:12px 16px}vg-icon[size-sm],.vg-icon[size-sm]{width:32px;height:32px;padding:10px}vg-icon[variant-round],.vg-icon[variant-round]{border-radius:50%}vg-icon-stack,.vg-icon-stack{display:flex;flex-direction:row}vg-icon-stack vg-icon:not(:first-child),vg-icon-stack .vg-icon:not(:first-child),.vg-icon-stack vg-icon:not(:first-child),.vg-icon-stack .vg-icon:not(:first-child){margin-left:-15px}vg-progress,.vg-progress{width:100%;height:6px;display:flex;border-radius:var(--border-radius);background-color:var(--color-11)}vg-progress span,.vg-progress span{height:100%;border-radius:var(--border-radius);background-color:var(--color-success);box-shadow:0px 100px 80px rgba(29,251,97,0.18),0px 41.7776px 33.4221px rgba(29,251,97,0.129394),0px 22.3363px 17.869px rgba(29,251,97,0.107299),0px 12.5216px 10.0172px rgba(29,251,97,0.09),0px 6.6501px 5.32008px rgba(29,251,97,0.0727007),0px 2.76726px 2.21381px rgba(29,251,97,0.0506062)}vg-progress[style-accent] span,.vg-progress[style-accent] span{background-color:var(--color-accent);box-shadow:var(--shadow-accent)}vg-progress[style-success] span,.vg-progress[style-success] span{background-color:var(--color-success);box-shadow:0px 100px 80px rgba(29,251,97,0.18),0px 41.7776px 33.4221px rgba(29,251,97,0.129394),0px 22.3363px 17.869px rgba(29,251,97,0.107299),0px 12.5216px 10.0172px rgba(29,251,97,0.09),0px 6.6501px 5.32008px rgba(29,251,97,0.0727007),0px 2.76726px 2.21381px rgba(29,251,97,0.0506062)}vg-progress[style-warning] span,.vg-progress[style-warning] span{background-color:var(--color-warning);box-shadow:0px 73px 74px rgba(255,162,0,0.63),0px 26.6462px 27.0112px rgba(255,162,0,0.434688),0px 12.9362px 13.1134px rgba(255,162,0,0.350463),0px 6.34158px 6.42845px rgba(255,162,0,0.279537),0px 2.50747px 2.54182px rgba(255,162,0,0.195312)}vg-progress[style-danger] span,.vg-progress[style-danger] span{background-color:var(--color-danger);box-shadow:0px 100px 80px rgba(255,19,94,0.34),0px 41.7776px 33.4221px rgba(255,19,94,0.24441),0px 22.3363px 17.869px rgba(255,19,94,0.202676),0px 12.5216px 10.0172px rgba(255,19,94,0.17),0px 6.6501px 5.32008px rgba(255,19,94,0.137324),0px 2.76726px 2.21381px rgba(255,19,94,0.0955895)}body[spa]{max-width:100vw;max-height:100vh;height:100vh;width:100vw;padding:0;margin:0;overflow-x:hidden;display:flex;flex-flow:row}body[spa] vg-sidebar{max-height:100vh;min-width:250px;max-width:250px;padding:65px 20px;z-index:1;overflow-x:hidden;overflow-y:scroll;display:flex;flex-direction:column;background-color:var(--color-10)}body[spa] vg-sidebar vg-item{margin-bottom:6px;padding:12px 16px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;cursor:pointer;color:var(--color-1);border-radius:var(--border-radius);transition:var(--transition);font-weight:500;font-size:16px}body[spa] vg-sidebar vg-item:hover{background-color:var(--color-9)}body[spa] vg-sidebar vg-item:focus{background-color:var(--color-9)}body[spa] vg-sidebar vg-item:focus i{color:var(--color-1)}body[spa] vg-sidebar vg-item:focus i svg{fill:var(--color-1)}body[spa] vg-sidebar vg-item i{margin-right:10px;color:var(--color-5)}body[spa] vg-sidebar vg-item i svg{width:36px;height:36px;fill:var(--color-5)}body[spa] vg-sidebar[pos-left]{order:0}body[spa] vg-sidebar[pos-right]{order:1}body[spa] vg-sidebar[size-lg]{min-width:250px;max-width:250px}body[spa] vg-sidebar[size-lg] vg-item{padding:12px 16px;font-size:16px}body[spa] vg-sidebar[size-lg] vg-item i{margin-right:10px}body[spa] vg-sidebar[size-lg] vg-item i svg{width:36px;height:36px}body[spa] vg-sidebar[size-md]{min-width:200px;max-width:200px;padding:35px 20px}body[spa] vg-sidebar[size-md] vg-item{padding:8px 12px;font-size:15px}body[spa] vg-sidebar[size-md] vg-item i{margin-right:10px}body[spa] vg-sidebar[size-md] vg-item i svg{width:28px;height:28px}body[spa] vg-sidebar[size-sm]{min-width:60px;max-width:60px}body[spa] vg-sidebar[size-sm] vg-item{font-size:16px}body[spa] vg-sidebar[size-sm] vg-item i{margin-right:10px}body[spa] vg-sidebar[size-sm] vg-item i svg{width:36px;height:36px}body[spa] main{width:100%;max-height:100vh;padding:65px 30px;overflow-x:hidden;overflow-y:scroll;display:flex;flex-direction:column;flex:1;background-color:var(--color-11)}.noselect,button,.vg-button,body[spa] vg-sidebar vg-item{user-select:none}.nodrag{pointer-events:none;user-select:none;user-drag:none}.fill,vg-icon i,.vg-icon i,[fill]{width:100%;height:100%}[fill-w]{width:100%}[fill-h]{height:100%}[rounded]{border-radius:50%}\n',""]);const i=n},645:o=>{o.exports=function(o){var e=[];return e.toString=function(){return this.map((function(e){var t=o(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(o,t,r){"string"==typeof o&&(o=[[null,o,""]]);var n={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(n[a]=!0)}for(var c=0;c<o.length;c++){var l=[].concat(o[c]);r&&n[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},379:(o,e,t)=>{var r,n=function(){var o={};return function(e){if(void 0===o[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(o){t=null}o[e]=t}return o[e]}}(),i=[];function a(o){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===o){e=t;break}return e}function c(o,e){for(var t={},r=[],n=0;n<o.length;n++){var c=o[n],l=e.base?c[0]+e.base:c[0],s=t[l]||0,d="".concat(l," ").concat(s);t[l]=s+1;var g=a(d),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==g?(i[g].references++,i[g].updater(u)):i.push({identifier:d,updater:h(u,e),references:1}),r.push(d)}return r}function l(o){var e=document.createElement("style"),r=o.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(o){e.setAttribute(o,r[o])})),"function"==typeof o.insert)o.insert(e);else{var a=n(o.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,d=(s=[],function(o,e){return s[o]=e,s.filter(Boolean).join("\n")});function g(o,e,t,r){var n=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(o.styleSheet)o.styleSheet.cssText=d(e,n);else{var i=document.createTextNode(n),a=o.childNodes;a[e]&&o.removeChild(a[e]),a.length?o.insertBefore(i,a[e]):o.appendChild(i)}}function u(o,e,t){var r=t.css,n=t.media,i=t.sourceMap;if(n?o.setAttribute("media",n):o.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),o.styleSheet)o.styleSheet.cssText=r;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(r))}}var p=null,v=0;function h(o,e){var t,r,n;if(e.singleton){var i=v++;t=p||(p=l(e)),r=g.bind(null,t,i,!1),n=g.bind(null,t,i,!0)}else t=l(e),r=u.bind(null,t,e),n=function(){!function(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o)}(t)};return r(o),function(e){if(e){if(e.css===o.css&&e.media===o.media&&e.sourceMap===o.sourceMap)return;r(o=e)}else n()}}o.exports=function(o,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(o=o||[],e);return function(o){if(o=o||[],"[object Array]"===Object.prototype.toString.call(o)){for(var r=0;r<t.length;r++){var n=a(t[r]);i[n].references--}for(var l=c(o,e),s=0;s<t.length;s++){var d=a(t[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=l}}}}},e={};function t(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={id:r,exports:{}};return o[r](i,i.exports,t),i.exports}t.n=o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return t.d(e,{a:e}),e},t.d=(o,e)=>{for(var r in e)t.o(e,r)&&!t.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:e[r]})},t.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),t.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var r={};(()=>{t.r(r),t.d(r,{default:()=>_});var o=t(379),e=t.n(o),n=t(176);function i(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.push.apply(t,r)}return t}function a(o){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){c(o,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(t,e))}))}return o}function c(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function l(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function s(o,e,t){return e&&l(o.prototype,e),t&&l(o,t),o}e()(n.Z,{insert:"head",singleton:!1}),n.Z.locals;var d=function(){function o(e){!function(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),this.propsCallback=e,this.additionalProps={}}return s(o,null,[{key:"variables",value:function(){var o=getComputedStyle(document.body);return{color0:o.getPropertyValue("--color-0"),color1:o.getPropertyValue("--color-1"),color2:o.getPropertyValue("--color-2"),color3:o.getPropertyValue("--color-3"),color4:o.getPropertyValue("--color-4"),color5:o.getPropertyValue("--color-5"),color6:o.getPropertyValue("--color-6"),color7:o.getPropertyValue("--color-7"),color8:o.getPropertyValue("--color-8"),color9:o.getPropertyValue("--color-9"),color10:o.getPropertyValue("--color-10"),color11:o.getPropertyValue("--color-11"),colorSuccess:o.getPropertyValue("--color-success"),colorWarning:o.getPropertyValue("--color-warning"),colorDanger:o.getPropertyValue("--color-danger"),borderWidth:o.getPropertyValue("--border-width").trim(),borderRadius:o.getPropertyValue("--border-radius").trim(),transition:o.getPropertyValue("--transition")}}},{key:"Style",value:function(){var e=o.variables(),t=function(o){return{color0:i(o,e.color0),color1:i(o,e.color1),color2:i(o,e.color2),color3:i(o,e.color3),color4:i(o,e.color4),color5:i(o,e.color5),color6:i(o,e.color6),color7:i(o,e.color7),color8:i(o,e.color8),color9:i(o,e.color9),color10:i(o,e.color10),color11:i(o,e.color11),transparent:i(o,"transparent"),black:i(o,"black"),white:i(o,"white"),color:function(e){return i(o,e)},rgb:function(e,t,r){return i(o,"rgb(".concat(e,", ").concat(t,", ").concat(r,")"))},rgba:function(e,t,r,n){return i(o,"rgba(".concat(e,", ").concat(t,", ").concat(r,", ").concat(n,")"))},hex:function(e){return i(o,"#".concat(e))}}},r=function(o){return{px:function(e){return i(o,"".concat(e,"px"))},rem:function(e){return i(o,"".concat(e,"rem"))},em:function(e){return i(o,"".concat(e,"em"))},vw:function(e){return i(o,"".concat(e,"vw"))},vh:function(e){return i(o,"".concat(e,"vh"))},percent:function(e){return i(o,"".concat(e,"%"))},min:i(o,"min-content"),max:i(o,"max-content"),fit:i(o,"fit-content"),fill:i(o,"100%")}},n=function(o){return{Left:r("".concat(o,"-left")),Right:r("".concat(o,"-right")),Top:r("".concat(o,"-top")),Bottom:r("".concat(o,"-bottom")),All:r(o)}},i=function(o,e){return"".concat(o,":").concat(e,";")},c=function(o,e){var t={};return e.forEach((function(e){return t=a(a({},t),e(o))})),t};return{Width:c("width",[r]),MinWidth:c("min-width",[r]),MaxWidth:c("max-width",[r]),Height:c("height",[r]),MinHeight:c("min-height",[r]),MaxHeight:c("max-height",[r]),Fill:i("width","100%")+i("height","100%"),Fullscreen:i("width","100vw")+i("height","100vh"),Margin:c("margin",[n]),Padding:c("padding",[n]),BgColor:c("background-color",[t]),TextColor:c("color",[t]),TextSize:c("font-size",[r]),TextWeight:{100:i("font-weight","100"),200:i("font-weight","200"),300:i("font-weight","300"),400:i("font-weight","400"),500:i("font-weight","500"),600:i("font-weight","600"),700:i("font-weight","700"),800:i("font-weight","800"),Normal:i("font-weight","normal"),Bold:i("font-weight","bold")},TextAlign:{Left:i("text-align","left"),Center:i("text-align","center"),Right:i("text-align","right")},TextDecoration:{Underline:i("text-decoration","underline"),None:i("text-decoration","none")},Cursor:{None:i("cursor","none"),Auto:i("cursor","auto"),Clickable:i("cursor","pointer"),Custom:function(o,e,t){return i("cursor","".concat(o," ").concat(e," ").concat(t,", auto"))}},Selection:{None:i("user-select","none")},Transition:{None:i("transition","none"),Smooth:i("transition",".3s ease-in-out")},As:{Block:i("display","block"),Inline:i("display","inline")},AutoContent:i("display","flex"),Direction:{Horizontal:i("flex-direction","row"),Vertical:i("flex-direction","column")},Align:{Start:i("align-items","flex-start"),Center:i("align-items","center"),End:i("align-items","flex-end")},Justify:{Start:i("justify-content","flex-start"),Center:i("justify-content","center"),End:i("justify-content","flex-end")},Gap:c("gap",[r]),Rounding:a(a({},r("border-radius")),{},{Default:i("border-radius",e.borderRadius)}),Custom:function(o,e){return i(o,e)},Force:function(o){return o.replace(";"," !important ;")}}}}]),s(o,[{key:"addAdditional",value:function(o,e){this.additionalProps[o]=e}},{key:"css",value:function(e){var t="",r=this.propsCallback(o.Style());return Object.keys(r).forEach((function(o){var n="".concat(e).concat(o.replaceAll(":host",""));r[o].length>0&&(t+="".concat(n," {"),r[o].forEach((function(o){t+=o})),t+="}")})),t}},{key:"inline",value:function(){var e="",t=this.propsCallback(o.Style());return Object.keys(t).forEach((function(o){":host"==o.trim()&&t[o].length>0&&t[o].forEach((function(o){e+=o}))})),e}}]),o}();function g(o){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function u(o,e){return!e||"object"!==g(e)&&"function"!=typeof e?p(o):e}function p(o){if(void 0===o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function v(o){var e="function"==typeof Map?new Map:void 0;return(v=function(o){if(null===o||(t=o,-1===Function.toString.call(t).indexOf("[native code]")))return o;var t;if("function"!=typeof o)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(o))return e.get(o);e.set(o,r)}function r(){return h(o,arguments,x(this).constructor)}return r.prototype=Object.create(o.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,o)})(o)}function h(o,e,t){return(h=b()?Reflect.construct:function(o,e,t){var r=[null];r.push.apply(r,e);var n=new(Function.bind.apply(o,r));return t&&f(n,t.prototype),n}).apply(null,arguments)}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(o){return!1}}function f(o,e){return(f=Object.setPrototypeOf||function(o,e){return o.__proto__=e,o})(o,e)}function x(o){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function m(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function y(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function w(o,e,t){return e&&y(o.prototype,e),t&&y(o,t),o}d.prototype.toString=function(){return this.inline()};var z=function(){function o(e,t){var r=this;m(this,o),this.tag=e,this.events={},null!=t&&t.events&&Object.keys(t.events).forEach((function(o){return r.addEventListener(o,t.events[o])})),this.style=null!=t&&t.style&&"function"==typeof t.style?new d(t.style):null,this.initialState=(null==t?void 0:t.state)||function(){return{}},this.template=(null==t?void 0:t.template)||"",this.renderWay=(null==t?void 0:t.renderWay)||o.renderWays.dom,this.__initTag__()}return w(o,null,[{key:"createMultiple",value:function(e){if(e&&Array.isArray(e)){var t=[];return e.forEach((function(e){t.push(new o(e))})),t}throw new Error("Components tags was not passed")}},{key:"renderWays",get:function(){return{dom:"dom",shadowDom:"shadow"}}}]),w(o,[{key:"use",value:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"<".concat(this.tag," \n            ").concat(Object.keys(e).map((function(o){return"".concat(o,'="').concat(e[o],'"')})).join(" "),"\n        >\n            ").concat(o,"\n        </").concat(this.tag,">")}},{key:"addEventListener",value:function(o,e){this.events[o]||(this.events[o]=[]),this.events[o].push(e)}},{key:"emit",value:function(o,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.events[o]&&this.events[o].forEach((function(o){return t?o.bind(e)(t):o.bind(e)()}))}},{key:"__initTag__",value:function(){var e=this,t=this;window.customElements.define(t.tag.toLowerCase(),function(e){!function(o,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),e&&f(o,e)}(a,e);var r,n,i=(r=a,n=b(),function(){var o,e=x(r);if(n){var t=x(this).constructor;o=Reflect.construct(e,arguments,t)}else o=e.apply(this,arguments);return u(this,o)});function a(){var o;m(this,a),(o=i.call(this)).$component=t,o.$initialInner=o.innerHTML,o.$initialOuter=o.outerHTML;var e=t.initialState.bind(p(o))();return o.state=new Proxy(e,{get:function(o,e){return o[e]},set:function(e,t,r){return void 0!==e[t]&&(e[t]=r,o.render(),!0)}}),o.$component.__initInstance__(p(o)),o.$component.__attachShadow__(p(o)),o.$component.__renderInstance__(p(o)),o}return w(a,[{key:"render",value:function(){this.$component.__renderInstance__(this)}},{key:"connectedCallback",value:function(){this.$component.emit(o.events.added,this)}},{key:"disconnectedCallback",value:function(){this.$component.emit(o.events.removed,this)}},{key:"adoptedCallback",value:function(){this.$component.emit(o.events.adopted,this)}},{key:"attributeChangedCallback",value:function(o,e,t){this[o]}}],[{key:"observedAttributes",get:function(){return[]}}]),a}(v(HTMLElement))),this.emit(o.events.defined,null),this.style&&(this.style instanceof d?(this.style.addAdditional("color","white"),document.getElementById("vegtex-style")?document.getElementById("vegtex-style").innerHTML+=this.style.css(this.tag):document.addEventListener("DOMContentLoaded",(function(){return document.getElementById("vegtex-style").innerHTML+=e.style.css(e.tag)}))):console.error("Error, expected VegtexStyle to be as component.style"))}},{key:"__initInstance__",value:function(e){var t=this,r=function(o){o.startsWith("__")||e.addEventListener(o,(function(r){t.emit(o,e,r)}))};for(var n in this.events)r(n);this.emit(o.events.initialized,e)}},{key:"__attachShadow__",value:function(e){this.renderWay===o.renderWays.shadowDom&&(e.shadow=e.attachShadow({mode:"open"}))}},{key:"__renderShadow__",value:function(o,e){var t=document.createElement("template");t.innerHTML=e,o.innerHTML="",o.shadow.appendChild(t)}},{key:"__renderInstance__",value:function(e){if(this.emit(o.events.beforeRender,e),void 0!==this.template){var t=e.$initialInner;if("string"==typeof this.template&&this.template.length>0?t=this.template:"function"==typeof this.template&&(t=this.template.bind(e)()||e.$initialInner),this.renderWay==o.renderWays.dom)e.innerHTML=t;else{if(this.renderWay!=o.renderWays.shadowDom)throw new Error("Invalid render way: '".concat(this.renderWay,"' (Expected 'dom' or 'shadow')"));this.__renderShadow__(e,"\n                    ".concat(this.style?"<style>".concat(this.style.css,"</style>"):"","\n                    ").concat(t,"\n                "))}}else this.renderWay==o.renderWays.shadowDom&&this.__renderShadow__(e,"\n                ".concat(this.style?"<style>".concat(this.style.css,"</style>"):"","\n                ").concat(e.$initialInner,"\n            "));this.emit(o.events.afterRender,e)}}],[{key:"events",get:function(){return{beforeRender:"__beforerender__",afterRender:"__afterrender__",added:"__added__",removed:"__removed__",adopted:"__adopted__",initialized:"__init__",defined:"__defined__"}}}]),o}();const k={init:function(){window.globals={}},exists:function(o){return window.globals&&window.globals[o]},get:function(o){if(window.globals)return window.globals[o];throw new Error("Failed to get global '".concat(o,"', you should do vegtex.use before"))},set:function(o,e){if(!window.globals)throw new Error("Failed to set global '".concat(o,"', you should do vegtex.use before"));window.globals[o]=e}};new z("vg-card",{}),new z("vg-icon",{}),new z("vg-icon-stack",{}),new z("vg-badge",{}),new z("vg-progress",{}),new z("vg-item",{events:{click:function(o,e){switch(o.parentNode.tagName.toLowerCase()){case"vg-list":o.handleAsListItem(o,e);break;case"vg-navbar":o.handleAsNavItem(o,e);break;case"vg-sidebar":o.handleAsSidebarItem(o,e)}}},locals:{handleAsListItem:function(o,e){},handleAsNavItem:function(o,e){},handleAsSidebarItem:function(o,e){var t=e.target.getAttribute("navigate");t&&console.log(t)}}}),new z("vg-sidebar",{});const _={use:function(o,e){if(!o||"dark"!==o&&"light"!==o)throw new Error('You should specify valid scheme ("dark" or "light")');if(!e)throw new Error("You should specify scheme accent");document.body.className="vg-app theme-".concat(o," accent-").concat(e);var t=document.createElement("style");t.setAttribute("id","vegtex-style"),document.head.appendChild(t),k.init()},createRouter:function(o,e){k.set("router",{mode:(null==e?void 0:e.mode)||"multipage"}),new z("router-view",{state:function(){return{page:new URL(window.location.href).searchParams.get("page")||"index",pages:o}},template:function(){return this.state.pages[this.state.page]||this.state.pages[404]||"<p>Error: page '".concat(this.state.page,"' not found, 404 page was not defined.</p>")},style:function(o){return{":host":[o.AutoContent,o.Direction.Vertical,o.Align.Center,o.Justify.Center,o.Padding.All.rem(1)]}},events:{__added__:function(){if(k.exists("routerView"))throw new Error("Page cannot contain multiple router views(<router-view>)");k.set("routerView",this)}}}),new z("router-link",{state:function(){return{to:this.getAttribute("to")}},events:{click:function(){if(!k.exists("router"))throw new Error("Failed to navigate, router was not defined");var o=k.get("router");"spa"===o.mode?k.get("routerView").state.page=this.state.to:"multipage"===o.mode&&(window.location="".concat(window.location.pathname,"?page=").concat(this.state.to))}},style:function(o){return{":host":[o.Width.min,o.TextColor.color0,o.Cursor.Clickable,o.Transition.Smooth],":hover":[o.TextDecoration.Underline]}}})},VegtexComponent:z,VegtexStyle:d,VegtexGlobals:k}})(),module.exports=r})();