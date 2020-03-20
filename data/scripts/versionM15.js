var versionM15ImageList = [
['White Frame', 'data/images/m15/m15FrameW.png', 0, 0, 1, 1, ['Full', 'Pinline (m15)']],
['Blue Frame', 'data/images/m15/m15FrameU.png', 0, 0, 1, 1, ['Full', 'Pinline (m15)']],
['Black Frame', 'data/images/m15/m15FrameB.png', 0, 0, 1, 1, ['Full', 'Pinline (m15)']],
['Red Frame', 'data/images/m15/m15FrameR.png', 0, 0, 1, 1, ['Full', 'Pinline (m15)']],
['Green Frame', 'data/images/m15/m15FrameG.png', 0, 0, 1, 1, ['Full', 'Pinline (m15)']]
]
var versionM15MaskList = [['Right Half', 'data/images/maskRightHalf.png'], ['Pinline (m15)', 'data/images/m15/m15MaskPinline.png'], ['Full', 'data/images/maskFull.png']]
if (!loadedVersions.includes('m15')) {
	loadedVersions.push("m15")
	loadMaskImages(versionM15MaskList)
	loadFrameImages(versionM15ImageList)
}
loadTextOptions([
new cardText('Card Title', 'Awesome Card Tho!!!', 0.1, 0.1, 0.8, 0.8, 'belerenb', 0.0177, 'black'),
new cardText('Card Type', '', 0.1, 0.1, 0.8, 0.8, 'belerenb', 0.0177, 'black'),
new cardText('Rules Text', '', 0.1, 0.1, 0.8, 0.8, 'mplantin', 0.0177, 'black'),
new cardText('Power/Toughness', '', 0.1, 0.1, 0.8, 0.8, 'mplantin', 0.0177, 'black')
])

artX = 0
artY = 0
artWidth = 1500
artHeight = 500