/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.com.bumptech.glide.request;

public class RequestListener extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        com.bumptech.glide.request.RequestListener<java.lang.Object> {
  public RequestListener() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public boolean onLoadFailed(
      com.bumptech.glide.load.engine.GlideException param_0,
      java.lang.Object param_1,
      com.bumptech.glide.request.target.Target<java.lang.Object> param_2,
      boolean param_3) {
    java.lang.Object[] args = new java.lang.Object[4];
    args[0] = param_0;
    args[1] = param_1;
    args[2] = param_2;
    args[3] = param_3;
    return (boolean) com.tns.Runtime.callJSMethod(this, "onLoadFailed", boolean.class, args);
  }

  public boolean onResourceReady(
      java.lang.Object param_0,
      java.lang.Object param_1,
      com.bumptech.glide.request.target.Target<java.lang.Object> param_2,
      com.bumptech.glide.load.DataSource param_3,
      boolean param_4) {
    java.lang.Object[] args = new java.lang.Object[5];
    args[0] = param_0;
    args[1] = param_1;
    args[2] = param_2;
    args[3] = param_3;
    args[4] = param_4;
    return (boolean) com.tns.Runtime.callJSMethod(this, "onResourceReady", boolean.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}