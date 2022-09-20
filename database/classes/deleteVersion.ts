export class RemoveVersion {
  removeVerisonFromData(data: Record<string, any>) {
    delete data.__v;
    return data;
  }
}
