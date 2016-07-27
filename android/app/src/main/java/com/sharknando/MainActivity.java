package com.sharknando;

import com.facebook.react.ReactActivity;
import com.lwansbrough.RCTCamera.*;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "sharknando";
    }

    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new new RCTCameraPackage()
            new ImagePickerPackage()
        );
    }
}
