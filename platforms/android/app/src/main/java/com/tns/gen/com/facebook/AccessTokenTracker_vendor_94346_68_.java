/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.com.facebook;

public class AccessTokenTracker_vendor_94346_68_ extends com.facebook.AccessTokenTracker
    implements com.tns.NativeScriptHashCodeProvider {
  public AccessTokenTracker_vendor_94346_68_() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  protected void onCurrentAccessTokenChanged(
      com.facebook.AccessToken param_0, com.facebook.AccessToken param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    com.tns.Runtime.callJSMethod(this, "onCurrentAccessTokenChanged", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
