import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RemediationUser, table1 } from './sample';


interface Columns {
  id: number;
  name: string;
  viewValue: string;
  checkBox: boolean;
  width: number;
  filterable: boolean;
  filter: any;
  format: any;
  locked: boolean;
}

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export class SampleComponent {
  public gridData1: any[] = [];
  FinColumns!: Columns[];
  userType: string = 'is_admin';
  public scrollClass: string = '';
  constructor(
    public dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
     this.FinColumns = RemediationUser;

    this.getAllDailyImageTracker();
  }
  onWindowScroll(): void {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollPosition > 100) {
      // Define your logic here
      this.scrollClass = 'fixed-header';
    } else {
      this.scrollClass = '';
    }
  }
  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onWindowScroll.bind(this));
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  getAllDailyImageTracker() {
     this.gridData1 = table1;
    const fd = {
      tenant_id: 'default',
      offset: 0,
      search: '',
      filter: {},
      sorting: {},
      limit: 1000,
    };
    /*this.remediationService
      .getALLRemediationUserList(fd)
      .subscribe((res: any) => {
        console.log('logger detials :: ', res);

        this.gridData1 = res.results.data;
      });*/
  }
  // Color menu item click handler
  selectColor($event: any, id: number) {
    // add additional selection logic here.
    console.log('Id :: ', id);
    this.FinColumns[id].checkBox = !this.FinColumns[id].checkBox;

    // this stops the menu from closing
    $event.stopPropagation();
    $event.preventDefault();

    // in this case, the check box is controlled by adding the .selected class
    if ($event.target) {
      $event.target.classList.toggle('selected');
    }
  }
  clickedRowItem: any;
  onCellClick(e: any) {
    // this.clickedRowItem = e.dataItem;
    // console.log('row select :: ', this.clickedRowItem);
    // const dialogRef = this.dialog.open(CreateRemUserComponent, {
    //   data: this.clickedRowItem,
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    //   this.getAllDailyImageTracker();
    // });
  }
  createRemediationUser() {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
      if (result) this.getAllDailyImageTracker();
    });
  }
}
