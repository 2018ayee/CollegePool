/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.com.google.android.gms.maps;

public class GoogleMap_OnMarkerDragListener extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        com.google.android.gms.maps.GoogleMap.OnMarkerDragListener {
  public GoogleMap_OnMarkerDragListener() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onMarkerDragStart(com.google.android.gms.maps.model.Marker param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onMarkerDragStart", void.class, args);
  }

  public void onMarkerDrag(com.google.android.gms.maps.model.Marker param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onMarkerDrag", void.class, args);
  }

  public void onMarkerDragEnd(com.google.android.gms.maps.model.Marker param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onMarkerDragEnd", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}