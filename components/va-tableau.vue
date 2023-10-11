<template>
<div class='tableauPlaceholder' id='viz1696939686375' style='position: relative'>
    <noscript>
        <a href='#'>
            <img alt='Dashboard 4 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Th&#47;TheimpactofcoronavirusonparkourbusinessesVA&#47;Dashboard4&#47;1_rss.png' style='border: none' />
        </a>
    </noscript>
    <object class='tableauViz'  style='display:none;'>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
        <param name='embed_code_version' value='3' /> 
        <param name='site_root' value='' />
        <param name='name' value='TheimpactofcoronavirusonparkourbusinessesVA&#47;Dashboard4' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='no' />
        <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Th&#47;TheimpactofcoronavirusonparkourbusinessesVA&#47;Dashboard4&#47;1.png' /> 
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='no' />
        <param name='language' value='en-GB' />
        <param name='filter' value='publish=yes' />
    </object>
</div>                             
</template>

<script type='text/javascript'> 
export default {
    mounted: () => {
        loadChart();
    },

}

function loadChart() {
    var divElement = document.getElementById('viz1696939686375');                    
    var vizElement = divElement.getElementsByTagName('object')[0];                    
    if ( divElement.offsetWidth > 800 ) { 
        vizElement.style.minWidth='250px';
        vizElement.style.maxWidth='2560px';
        vizElement.style.width='100%';
        vizElement.style.height='1427px';
    } else if ( divElement.offsetWidth > 500 ) { 
        vizElement.style.minWidth='250px';
        vizElement.style.maxWidth='2560px';
        vizElement.style.width='100%';
        vizElement.style.height='1427px';
    } else { 
        vizElement.style.width='100%';
        vizElement.style.height='2427px';
    }                     
    var scriptElement = document.createElement('script');                    
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
    vizElement.parentNode.insertBefore(scriptElement, vizElement);              
}         
</script>
