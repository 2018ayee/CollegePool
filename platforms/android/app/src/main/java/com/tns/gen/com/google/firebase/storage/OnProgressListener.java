/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.com.google.firebase.storage;

public class OnProgressListener extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        com.google.firebase.storage.OnProgressListener<java.lang.Object> {
  public OnProgressListener() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onProgress(java.lang.Object param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onProgress", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}