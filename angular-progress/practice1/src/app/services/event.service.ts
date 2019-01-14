import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class EventService {

  constructor(private storageServices: LocalStorageService) {}
  getAll() {
  return this.storageServices.get();
  }

}
