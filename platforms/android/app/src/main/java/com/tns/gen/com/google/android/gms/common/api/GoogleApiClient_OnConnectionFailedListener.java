/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.com.google.android.gms.common.api;

public class GoogleApiClient_OnConnectionFailedListener extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
  public GoogleApiClient_OnConnectionFailedListener() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onConnectionFailed(com.google.android.gms.common.ConnectionResult param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onConnectionFailed", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
