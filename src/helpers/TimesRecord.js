import { AsyncStorage } from 'react-native';

export default class TimesRecord {
  constructor(timesLimit, dueTime) {
    this.timesLimit = timesLimit;
    this.dueTime = dueTime;
    this.records = [];
  }

  async load(record) {
    this.recordName = record;
    const records = await AsyncStorage.getItem(record);
    if (!records) {
      this.records = [];
      await AsyncStorage.setItem(record, JSON.stringify(this.records));

      return;
    }

    this.records = JSON.parse(records);
  }

  async addRecord() {
    this.records.push(Date.now());

    if (this.records.length > this.timesLimit) {
      this.records.shift();
    }

    await AsyncStorage.setItem(this.recordName, JSON.stringify(this.records));
  }

  isValid() {
    return (this.records.length < this.timesLimit)
      || (Date.now() - this.records[0] > this.dueTime);
  }
}
