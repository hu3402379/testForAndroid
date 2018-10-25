<template>
    <div
        oncontextmenu="return false"
        class='disable-selection noIbar'
        unselectable='on'
        onselectstart='return false;'
        onmousedown='return false;'>
        <div ref="dicomImage" class="viewport"></div>
    </div>
</template>

<script>
import * as cornerstoneMath from 'cornerstone-math'
import * as dicomParser from 'dicom-parser'
import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader'

let imageIds = [
    'wadouri:/static/dcm/jpeg-ls.dcm'
]
let stack = {
    currentImageIdIndex : 0,
    imageIds: imageIds
};

export default {
    data () {
        return {
        }
    },
    mounted () {
        this.initDcm()
    },
    methods: {
        initDcm() {
            cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
            cornerstoneWADOImageLoader.external.dicomParser = dicomParser
            cornerstoneTools.external.cornerstone = cornerstone;
            cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
            let element = this.$refs.dicomImage
            element.addEventListener('cornerstoneimagerendered', this.onImageRendered); 
            element.addEventListener('cornerstonenewimage', this.onNewImage);

            this.loadAndViewImages()
        },
        onImageRendered(e) {
          console.log('onImageRendered')
        },
        onNewImage(e) {
          console.log('onNewImage')
        },
        loadAndViewImages() {
            let element = this.$refs.dicomImage
            cornerstone.enable(element);
            cornerstoneTools.mouseInput.enable(element);
            cornerstoneTools.mouseWheelInput.enable(element);
            cornerstone.loadAndCacheImage(imageIds[0]).then((image) => {
                const viewport = cornerstone.getDefaultViewportForImage(element, image);
                cornerstone.displayImage(element, image, viewport);

                cornerstoneTools.addStackStateManager(element, ['stack', 'playClip']);
                cornerstoneTools.addToolState(element, 'stack', stack);

                cornerstoneTools.stackScroll.activate(element, 1);
                cornerstoneTools.stackScrollWheel.activate(element);
            });
        },
    },
}
</script>

<style scoped>
.viewport{
  position: absolute;
  margin: auto;
  width: 100%;
  height: 100%;
  min-height: 300px;
}
</style>
