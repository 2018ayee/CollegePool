/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.com.google.android.gms.maps;

public class GoogleMap_OnMapClickListener extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        com.google.android.gms.maps.GoogleMap.OnMapClickListener {
  public GoogleMap_OnMapClickListener() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onMapClick(com.google.android.gms.maps.model.LatLng param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onMapClick", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
