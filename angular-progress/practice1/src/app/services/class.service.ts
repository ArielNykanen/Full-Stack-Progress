import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class ClassService {

  constructor(private storageServices: LocalStorageService) {}

  get() {
    return this.storageServices.getAllClasses();
  }

}
