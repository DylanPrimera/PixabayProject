import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PixabayService } from 'src/app/services/pixabay.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.scss']
})
export class ImageSearchComponent implements OnInit {
  public form: FormGroup;
  public categories: any[] = [
    {value: 'science', name: 'Science'},
    {value: 'education', name: 'Education'},
    {value: 'people', name: 'People'},
    {value: 'feelings', name: 'Feelings'},
    {value: 'computer', name: 'Computer'},
    {value: 'buildings', name: 'Buildings'}
  ];

  public withCategory = false;

  constructor(private fb: FormBuilder, private service: PixabayService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      word: ['', Validators.required],
      category: [''],
    })
  }

  public submitForm(): void {
    const word = this.form.get('word').value;
    if (word === '') {
      this.service.setError('Add search term!');
      return;
    }
    const category = this.form.get('category').value;
    this.service.setSearchWord(word);
    if (category) {
      this.service.setCategory(category);
    }

  }

}
