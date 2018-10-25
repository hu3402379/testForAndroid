<template>
    <div class="main-content">
        <div class="info-content">
            <DcmView></DcmView>
        </div>
    </div>
</template>

<script>
    import DcmView from '../common/DcmView.vue'
    import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader'
    const config = {
        maxWebWorkers: navigator.hardwareConcurrency || 1,
        startWebWorkersOnDemand : true,
        webWorkerPath : '/static/js/cornerstoneWADOImageLoaderWebWorker.js',
        taskConfiguration: {
            'decodeTask' : {
                loadCodecsOnStartup: false,
                initializeCodecsOnStartup: false,
                codecsPath: '/static/js/cornerstoneWADOImageLoaderCodecs.js'
            }
        }
    };
    export default {
        data: function(){
            return {
            }
        },
        mounted () {
            this.init()
        },
        methods: {
            init() {
                cornerstoneWADOImageLoader.webWorkerManager.initialize(config);
            },
        },
        components: {
            DcmView
        }
    }
</script>

<style scoped>
    .tools-content{
        height: 60px;
        width: 100%;
        border: 1px solid #dcdfe6;
    }
    .tools-content .el-row{
        padding: 10px;
    }
    .info-content{
        width: 100%;
        border: 1px solid #dcdfe6;
        border-top: none;
    }
    .info-content .patient-content{
        text-align: center;
        border-right: 1px solid #dcdfe6;
    }
    .info-content .mark-content{
        text-align: center;
        border-left: 1px solid #dcdfe6;
    }

</style>