/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.com.google.android.gms.tasks;

public class Continuation extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        com.google.android.gms.tasks.Continuation<java.lang.Object, java.lang.Object> {
  public Continuation() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public java.lang.Object then(com.google.android.gms.tasks.Task<java.lang.Object> param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (java.lang.Object)
        com.tns.Runtime.callJSMethod(this, "then", java.lang.Object.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
