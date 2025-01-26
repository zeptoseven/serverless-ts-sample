import { Table, Column, Model, DataType } from "sequelize-typescript";

import sequelize from "../../database/sequelize";

@Table({ tableName: "users", timestamps: true })
export class User extends Model {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        allowNull: false,
        defaultValue: DataType.UUIDV4
    })
    id!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    firstname!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    lastname!: string;

    @Column({
        allowNull: true,
        type: DataType.DATE,
    })
    date_of_birth!: Date;

    @Column({
        allowNull: true,
        type: DataType.STRING,
    })
    gender!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    email!: string;

    @Column({
        allowNull: true,
        type: DataType.STRING,
    })
    email_work!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    password!: string;

    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    role!: number;

    @Column({
        allowNull: true,
        type: DataType.STRING,
    })
    remember_token!: string;

    @Column({
        allowNull: true,
        type: DataType.STRING,
    })
    forgot_password_token!: string;

    @Column({
        allowNull: true,
        type: DataType.DATE,
    })
    email_verified_at!: Date;

    @Column({
        allowNull: true,
        type: DataType.STRING,
    })
    weight_unit!: string;

    @Column({
        allowNull: true,
        type: DataType.STRING,
    })
    weight_goal!: string;

    @Column({
        allowNull: true,
        type: DataType.FLOAT,
    })
    height!: number;

    @Column({
        allowNull: true,
        type: DataType.STRING,
    })
    height_unit!: string;

    @Column({
        allowNull: true,
        type: DataType.STRING,
    })
    firebase_token!: string;

    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    status!: number;

    @Column({
        allowNull: true,
        type: DataType.UUID,
    })
    created_by!: string;

    @Column({
        allowNull: true,
        type: DataType.UUID,
    })
    last_updated_by!: string;

    @Column({
        allowNull: false,
        type: DataType.DATE,
        field: 'created_at',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    })
    createdAt!: Date;

    @Column({
        allowNull: false,
        type: DataType.DATE,
        field: 'updated_at',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    })
    updatedAt!: Date;
}

sequelize.addModels([User]);
