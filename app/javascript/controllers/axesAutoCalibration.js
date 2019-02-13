var wpd = wpd || {};
wpd.autoAlignAxes = (function() {
    function Start(){
        console.log("Bonjour")
        let calibration = null;
        let calibrator = null;
        calibration = new wpd.Calibration(2);
        calibration.labels = ['X1', 'X2', 'Y1', 'Y2'];
        calibration.labelPositions = ['N', 'N', 'E', 'E'];
        calibration.maxPointCount = 4;
        calibrator = new wpd.XYAxesCalibrator(calibration);

    if (calibrator != null) {
        let tool = new wpd.AxesCornersTool(this._calibration, false);//pickCorner
        wpd.graphicsWidget.setTool(tool);
        wpd.graphicsWidget.setRepainter(new wpd.AlignmentCornersRepainter(calibration));
        calibration.addPoint(values[0].x,values[0].y,0,0)
        calibration.addPoint(values[1].x,values[1].y,0,0)
        calibration.addPoint(values[2].x,values[2].y,0,0)
        calibration.addPoint(values[3].x,values[3].y,0,0)
    }
            document.getElementById('xmin').value = values[0].val;
            document.getElementById('xmax').value = values[1].val;
            document.getElementById('ymin').value = values[2].val;
            document.getElementById('ymax').value = values[3].val;
}return {
        Start: Start
    }
    }
    
       

)();