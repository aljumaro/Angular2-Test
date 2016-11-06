import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namefilter'
})
export class NamefilterPipe implements PipeTransform {

  transform(ninjas: any, term: any): any {
    //check if search term is undefined
    if (term === undefined) return ninjas;

    //return updated ninjas array
    return ninjas.filter(function(n){
      return n.name.toLowerCase().includes(term.toLowerCase());
    });
  }

}
