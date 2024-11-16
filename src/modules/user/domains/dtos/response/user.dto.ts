import { BaseDto } from 'src/common/domain/dtos/base.dto';
import { UserEntity } from '../../entities/user.entity';

export class UserDto extends BaseDto {
  id: string;

  name: string;

  userName: string;

  constructor(user: UserEntity) {
    super(user);
    this.name = user?.name;
    this.userName = user?.username;
  }
}
