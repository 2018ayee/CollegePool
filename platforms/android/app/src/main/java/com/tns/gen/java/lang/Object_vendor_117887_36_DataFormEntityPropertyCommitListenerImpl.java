/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.java.lang;

public class Object_vendor_117887_36_DataFormEntityPropertyCommitListenerImpl
    extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        com.telerik.widget.dataform.engine.EntityPropertyCommitListener {
  public Object_vendor_117887_36_DataFormEntityPropertyCommitListenerImpl() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public boolean onBeforeCommit(com.telerik.widget.dataform.engine.EntityProperty param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (boolean) com.tns.Runtime.callJSMethod(this, "onBeforeCommit", boolean.class, args);
  }

  public void onAfterCommit(com.telerik.widget.dataform.engine.EntityProperty param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onAfterCommit", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
