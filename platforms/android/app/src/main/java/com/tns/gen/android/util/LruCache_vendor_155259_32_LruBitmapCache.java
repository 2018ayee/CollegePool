/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.android.util;

public class LruCache_vendor_155259_32_LruBitmapCache
    extends android.util.LruCache<java.lang.Object, java.lang.Object>
    implements com.tns.NativeScriptHashCodeProvider {
  public LruCache_vendor_155259_32_LruBitmapCache(int param_0) {
    super(param_0);
    com.tns.Runtime.initInstance(this);
  }

  protected int sizeOf(java.lang.Object param_0, java.lang.Object param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    return (int) com.tns.Runtime.callJSMethod(this, "sizeOf", int.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
